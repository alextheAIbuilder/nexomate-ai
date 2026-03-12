"use client";

// Enhanced analytics with comprehensive tracking
declare global {
  interface Window {
    gtag: any;
    hj: any;
  }
}

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, any>;
}

export interface ConversionEvent {
  type: 'lead_generation' | 'demo_request' | 'roi_calculation' | 'contact_form' | 'newsletter_signup';
  value?: number;
  currency?: string;
  leadScore?: number;
  source?: string;
  medium?: string;
  campaign?: string;
}

class AnalyticsManager {
  private static instance: AnalyticsManager;
  private initialized = false;
  private queue: AnalyticsEvent[] = [];

  static getInstance(): AnalyticsManager {
    if (!AnalyticsManager.instance) {
      AnalyticsManager.instance = new AnalyticsManager();
    }
    return AnalyticsManager.instance;
  }

  initialize(): void {
    if (this.initialized) return;

    // Process queued events
    this.queue.forEach(event => this.trackEvent(event));
    this.queue = [];
    this.initialized = true;

    // Set up page view tracking
    this.trackPageView();
    
    // Set up scroll tracking
    this.setupScrollTracking();
    
    // Set up click tracking
    this.setupClickTracking();
    
    // Set up form tracking
    this.setupFormTracking();
  }

  trackEvent(event: AnalyticsEvent): void {
    if (!this.initialized) {
      this.queue.push(event);
      return;
    }

    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.customParameters
      });
    }

    // Hotjar (if available)
    if (typeof window !== 'undefined' && window.hj) {
      window.hj('event', event.action);
    }

    console.log('Analytics Event:', event);
  }

  trackConversion(conversion: ConversionEvent): void {
    const baseValue = this.getConversionValue(conversion.type);
    const value = conversion.value || baseValue;

    // Track as GA4 conversion
    this.trackEvent({
      action: 'conversion',
      category: 'lead_generation',
      label: conversion.type,
      value,
      customParameters: {
        conversion_type: conversion.type,
        lead_score: conversion.leadScore,
        traffic_source: conversion.source,
        traffic_medium: conversion.medium,
        campaign: conversion.campaign,
        currency: conversion.currency || 'USD'
      }
    });

    // Track specific conversion events
    switch (conversion.type) {
      case 'demo_request':
        this.trackEvent({
          action: 'request_quote',
          category: 'conversion',
          value,
          customParameters: { method: 'demo_form' }
        });
        break;
        
      case 'contact_form':
        this.trackEvent({
          action: 'generate_lead',
          category: 'form',
          value,
          customParameters: { form_type: 'contact' }
        });
        break;
        
      case 'roi_calculation':
        this.trackEvent({
          action: 'calculate_roi',
          category: 'engagement',
          value,
          customParameters: { interaction_type: 'calculator' }
        });
        break;
    }
  }

  trackCTAClick(ctaText: string, section: string, position: string): void {
    this.trackEvent({
      action: 'cta_click',
      category: 'engagement',
      label: ctaText,
      customParameters: {
        cta_section: section,
        cta_position: position,
        cta_text: ctaText
      }
    });
  }

  trackFormStart(formType: string): void {
    this.trackEvent({
      action: 'form_start',
      category: 'form_interaction',
      label: formType,
      customParameters: { form_type: formType }
    });
  }

  trackFormSubmission(formType: string, value?: number): void {
    this.trackEvent({
      action: 'form_submit',
      category: 'form_interaction',
      label: formType,
      value,
      customParameters: { form_type: formType }
    });
  }

  trackPageView(path?: string): void {
    const page = path || window.location.pathname;
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
        page_path: page
      });
    }
  }

  trackUserJourney(step: string, data?: Record<string, any>): void {
    this.trackEvent({
      action: 'user_journey_step',
      category: 'user_flow',
      label: step,
      customParameters: {
        journey_step: step,
        ...data
      }
    });
  }

  trackExitIntent(): void {
    this.trackEvent({
      action: 'exit_intent',
      category: 'user_behavior',
      customParameters: {
        time_on_page: this.getTimeOnPage(),
        scroll_depth: this.getScrollDepth()
      }
    });
  }

  private getConversionValue(type: ConversionEvent['type']): number {
    const values = {
      demo_request: 5000,
      contact_form: 2500,
      roi_calculation: 1000,
      newsletter_signup: 100,
      lead_generation: 2000
    };
    return values[type] || 0;
  }

  private setupScrollTracking(): void {
    let maxScroll = 0;
    const thresholds = [25, 50, 75, 100];
    const tracked = new Set<number>();

    const trackScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      
      maxScroll = Math.max(maxScroll, scrollPercent);

      thresholds.forEach(threshold => {
        if (maxScroll >= threshold && !tracked.has(threshold)) {
          tracked.add(threshold);
          this.trackEvent({
            action: 'scroll',
            category: 'engagement',
            label: `${threshold}%`,
            value: threshold
          });
        }
      });
    };

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          trackScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  private setupClickTracking(): void {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      
      // Track CTA button clicks
      if (target.matches('a[href*="demo"], button[data-cta]') || 
          target.closest('a[href*="demo"], button[data-cta]')) {
        const element = target.closest('a, button') as HTMLElement;
        const text = element.textContent?.trim() || 'Unknown CTA';
        const section = element.closest('section')?.id || 'unknown_section';
        
        this.trackCTAClick(text, section, 'click');
      }

      // Track external links
      if (target.matches('a[href^="http"]') || target.closest('a[href^="http"]')) {
        const link = target.closest('a') as HTMLAnchorElement;
        this.trackEvent({
          action: 'external_link_click',
          category: 'outbound',
          label: link.href
        });
      }
    });
  }

  private setupFormTracking(): void {
    // Track form starts (focus on first input)
    document.addEventListener('focusin', (event) => {
      const target = event.target as HTMLElement;
      if (target.matches('input, textarea, select')) {
        const form = target.closest('form');
        if (form && !form.dataset.tracked) {
          form.dataset.tracked = 'true';
          const formType = form.dataset.formType || form.id || 'unknown';
          this.trackFormStart(formType);
        }
      }
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      const formType = form.dataset.formType || form.id || 'unknown';
      this.trackFormSubmission(formType);
    });
  }

  private getTimeOnPage(): number {
    const startTime = sessionStorage.getItem('page_start_time');
    if (!startTime) return 0;
    return Date.now() - parseInt(startTime);
  }

  private getScrollDepth(): number {
    return Math.round(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    );
  }
}

// Export singleton instance
export const analytics = AnalyticsManager.getInstance();

// Initialize page start time
if (typeof window !== 'undefined') {
  sessionStorage.setItem('page_start_time', Date.now().toString());
}

// Exit intent detection
if (typeof window !== 'undefined') {
  let exitIntentTriggered = false;
  
  document.addEventListener('mouseleave', (event) => {
    if (!exitIntentTriggered && event.clientY <= 0) {
      exitIntentTriggered = true;
      analytics.trackExitIntent();
    }
  });
}