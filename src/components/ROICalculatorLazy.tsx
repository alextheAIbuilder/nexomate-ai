"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamic import with loading component
const EnhancedROICalculator = dynamic(() => import('./ROICalculator'), {
  loading: () => (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded-lg mb-4 w-64"></div>
        <div className="h-4 bg-gray-200 rounded mb-6 w-96"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-32"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
          </div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-32"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="mt-8 h-64 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  ),
  ssr: false
});

export default function ROICalculatorLazy() {
  return (
    <section id="roi-calculator" className="py-20 bg-gradient-to-br from-background-50 to-background-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary-50 border border-primary-200 text-primary-600">
            ROI Calculator
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-text-primary">
            See Your Potential <span className="gradient-text">ROI</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Calculate how much time and money you could save with AI automation
          </p>
        </div>
        
        <Suspense fallback={
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded-lg mb-4 w-64"></div>
              <div className="h-4 bg-gray-200 rounded mb-6 w-96"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                  <div className="h-12 bg-gray-200 rounded"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                  <div className="h-12 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="mt-8 h-64 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        }>
          <EnhancedROICalculator />
        </Suspense>
      </div>
    </section>
  );
}