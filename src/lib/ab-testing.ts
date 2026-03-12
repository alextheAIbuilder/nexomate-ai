"use client";

export type Variant = 'A' | 'B';

export interface ABTestConfig {
  testId: string;
  variants: {
    A: any;
    B: any;
  };
  trafficSplit: number; // 0-1, percentage for variant B
  description?: string;
}

export interface ABTestResult {
  variant: Variant;
  isParticipating: boolean;
}

class ABTestingFramework {
  private static instance: ABTestingFramework;
  private tests: Map<string, ABTestConfig> = new Map();
  private userAssignments: Map<string, Variant> = new Map();

  static getInstance(): ABTestingFramework {
    if (!ABTestingFramework.instance) {
      ABTestingFramework.instance = new ABTestingFramework();
    }
    return ABTestingFramework.instance;
  }

  // Initialize or register a test
  registerTest(config: ABTestConfig): void {
    this.tests.set(config.testId, config);
  }

  // Get variant for a user
  getVariant(testId: string, userId?: string): ABTestResult {
    const test = this.tests.get(testId);
    if (!test) {
      console.warn(`Test ${testId} not found`);
      return { variant: 'A', isParticipating: false };
    }

    // Use userId or fallback to session-based ID
    const sessionId = userId || this.getSessionId();
    const storageKey = `ab_test_${testId}_${sessionId}`;

    // Check if user already assigned
    let variant = this.userAssignments.get(storageKey);
    if (variant) {
      return { variant, isParticipating: true };
    }

    // Check localStorage for persistence
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey);
      if (stored && (stored === 'A' || stored === 'B')) {
        variant = stored as Variant;
        this.userAssignments.set(storageKey, variant);
        return { variant, isParticipating: true };
      }
    }

    // Assign new variant based on traffic split
    const random = this.hashString(sessionId + testId) / 100;
    variant = random < test.trafficSplit ? 'B' : 'A';

    // Store assignment
    this.userAssignments.set(storageKey, variant);
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, variant);
    }

    // Track assignment
    this.trackEvent('ab_test_assignment', {
      testId,
      variant,
      sessionId,
      timestamp: Date.now()
    });

    return { variant, isParticipating: true };
  }

  // Track conversion for a test
  trackConversion(testId: string, conversionType: string, value?: number): void {
    const result = this.getVariant(testId);
    if (!result.isParticipating) return;

    this.trackEvent('ab_test_conversion', {
      testId,
      variant: result.variant,
      conversionType,
      value,
      sessionId: this.getSessionId(),
      timestamp: Date.now()
    });
  }

  // Get test results summary
  getTestResults(testId: string): any {
    // This would typically fetch from analytics
    // For now, return structure for implementation
    return {
      testId,
      totalParticipants: 0,
      variantA: { participants: 0, conversions: 0, conversionRate: 0 },
      variantB: { participants: 0, conversions: 0, conversionRate: 0 },
      statisticalSignificance: null,
      confidence: null
    };
  }

  // Helper methods
  private getSessionId(): string {
    if (typeof window === 'undefined') return 'server-side';
    
    let sessionId = sessionStorage.getItem('ab_session_id');
    if (!sessionId) {
      sessionId = 'sess_' + Math.random().toString(36).substring(2) + Date.now();
      sessionStorage.setItem('ab_session_id', sessionId);
    }
    return sessionId;
  }

  private hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash) % 100;
  }

  private trackEvent(eventName: string, data: any): void {
    // Send to analytics (GA4, Mixpanel, etc.)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        ...data,
        event_category: 'ab_testing'
      });
    }

    console.log('AB Test Event:', eventName, data);
  }
}

// Export singleton instance
export const abTesting = ABTestingFramework.getInstance();

// React hook for A/B testing
import { useState, useEffect } from 'react';

export function useABTest(testId: string, userId?: string): ABTestResult {
  const [result, setResult] = useState<ABTestResult>({ variant: 'A', isParticipating: false });

  useEffect(() => {
    const testResult = abTesting.getVariant(testId, userId);
    setResult(testResult);
  }, [testId, userId]);

  return result;
}

// Predefined tests for the website
export const TESTS = {
  HERO_CTA: {
    testId: 'hero_cta_button',
    variants: {
      A: { text: 'See What AI Can Do For Your Agency →', color: 'primary' },
      B: { text: 'Start Free Trial Today →', color: 'accent' }
    },
    trafficSplit: 0.5,
    description: 'Testing CTA button text and color in hero section'
  },
  
  PRICING_DISPLAY: {
    testId: 'pricing_display',
    variants: {
      A: { showMonthly: true, emphasize: 'value' },
      B: { showMonthly: false, emphasize: 'savings' }
    },
    trafficSplit: 0.5,
    description: 'Testing pricing display format'
  },

  ROI_CALCULATOR_POSITION: {
    testId: 'roi_calculator_position',
    variants: {
      A: { position: 'middle', sticky: false },
      B: { position: 'early', sticky: true }
    },
    trafficSplit: 0.3,
    description: 'Testing ROI calculator placement and behavior'
  }
} as const;

// Initialize tests
Object.values(TESTS).forEach(test => {
  abTesting.registerTest(test);
});