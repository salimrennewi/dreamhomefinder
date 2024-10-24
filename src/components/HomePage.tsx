import React from 'react';
import { ArrowRight, Shield, Calculator, Home, CheckCircle } from 'lucide-react';
import { useStore } from '../store/useStore';

export function HomePage() {
  const setShowPreQualification = useStore((state) => state.setShowPreQualification);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-700">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover mix-blend-multiply filter brightness-50"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920"
            alt="Beautiful home exterior"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find Your Dream Home,<br />Within Your Means
          </h1>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl">
            Stop wasting time looking at homes you can't afford. Get pre-qualified instantly and browse properties that match your budget.
          </p>
          <div className="mt-10">
            <button
              onClick={() => setShowPreQualification(true)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Get Pre-Qualified Now
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A Smarter Way to Find Your Home
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              We've revolutionized the home-buying process by putting your financial reality first.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="mt-10 -mx-4 relative lg:mt-0">
              <div className="space-y-12">
                {[
                  {
                    icon: Calculator,
                    title: "Instant Pre-Qualification",
                    description: "Get pre-qualified in minutes with our automated system. No hard credit checks required."
                  },
                  {
                    icon: Shield,
                    title: "Smart Matching",
                    description: "Only see properties that match your budget and pre-qualification status."
                  },
                  {
                    icon: CheckCircle,
                    title: "Verified Listings",
                    description: "All our listings are verified and updated in real-time to ensure accuracy."
                  },
                  {
                    icon: Home,
                    title: "Direct Broker Connect",
                    description: "Connect directly with property brokers once you're pre-qualified."
                  }
                ].map((feature) => (
                  <div key={feature.title} className="relative">
                    <div className="relative flex items-center space-x-4">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg leading-6 font-medium text-gray-900">
                          {feature.title}
                        </h4>
                        <p className="mt-2 text-base text-gray-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-lg shadow-xl overflow-hidden">
                <img
                  className="relative rounded-lg mx-auto"
                  width="490"
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800"
                  alt="Dashboard preview"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to find your dream home?</span>
            <span className="block">Start with pre-qualification today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Join thousands of happy homeowners who found their perfect match through our platform.
          </p>
          <button
            onClick={() => setShowPreQualification(true)}
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Get Started
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}