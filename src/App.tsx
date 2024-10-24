import React from 'react';
import { Home, User } from 'lucide-react';
import { PropertyGrid } from './components/PropertyGrid';
import { Filters } from './components/Filters';
import { PreQualificationForm } from './components/PreQualificationForm';
import { HomePage } from './components/HomePage';
import { useStore } from './store/useStore';
import { sampleProperties } from './data/sampleProperties';

function App() {
  const { user, showPreQualification, setProperties, setShowPreQualification } = useStore();

  // Initialize properties
  React.useEffect(() => {
    setProperties(sampleProperties);
  }, [setProperties]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowPreQualification(false)}>
              <Home className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                DreamHome Finder
              </h1>
            </div>
            <div className="flex items-center gap-4">
              {user.isPreQualified && (
                <div className="text-sm">
                  <span className="text-gray-500">Pre-qualified for: </span>
                  <span className="font-semibold text-green-600">
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      maximumFractionDigits: 0,
                    }).format(user.preQualifiedAmount!)}
                  </span>
                </div>
              )}
              <button 
                onClick={() => setShowPreQualification(!showPreQualification)}
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200"
              >
                <User className="w-5 h-5" />
                <span>{showPreQualification ? 'Browse Homes' : 'Get Pre-Qualified'}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {showPreQualification ? (
          <PreQualificationForm />
        ) : user.isPreQualified ? (
          <>
            <Filters />
            <PropertyGrid />
          </>
        ) : (
          <HomePage />
        )}
      </main>
    </div>
  );
}

export default App;