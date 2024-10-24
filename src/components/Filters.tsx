import React from 'react';
import { useStore } from '../store/useStore';
import { Home, Building2 } from 'lucide-react';

export function Filters() {
  const { filters, setFilters } = useStore();

  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price Range
            </label>
            <div className="mt-1 grid grid-cols-2 gap-2">
              <input
                type="number"
                placeholder="Min"
                value={filters.minPrice || ''}
                onChange={(e) => setFilters({ 
                  minPrice: Number(e.target.value) 
                })}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <input
                type="number"
                placeholder="Max"
                value={filters.maxPrice || ''}
                onChange={(e) => setFilters({ 
                  maxPrice: Number(e.target.value) 
                })}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Bedrooms
            </label>
            <select
              value={filters.bedrooms}
              onChange={(e) => setFilters({ 
                bedrooms: Number(e.target.value) 
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="0">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Bathrooms
            </label>
            <select
              value={filters.bathrooms}
              onChange={(e) => setFilters({ 
                bathrooms: Number(e.target.value) 
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="0">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Property Type
            </label>
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => {
                  const newTypes = filters.propertyType.includes('house')
                    ? filters.propertyType.filter(t => t !== 'house')
                    : [...filters.propertyType, 'house'];
                  setFilters({ propertyType: newTypes });
                }}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                  filters.propertyType.includes('house')
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <Home className="w-4 h-4" />
                House
              </button>
              <button
                onClick={() => {
                  const newTypes = filters.propertyType.includes('apartment')
                    ? filters.propertyType.filter(t => t !== 'apartment')
                    : [...filters.propertyType, 'apartment'];
                  setFilters({ propertyType: newTypes });
                }}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                  filters.propertyType.includes('apartment')
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <Building2 className="w-4 h-4" />
                Apartment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}