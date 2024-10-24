import React from 'react';
import { Home, Bath, BedDouble, Square } from 'lucide-react';
import { Property } from '../types';
import { useStore } from '../store/useStore';
import { formatCurrency } from '../utils/format';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const user = useStore((state) => state.user);

  const canAfford = user.isPreQualified && 
    user.preQualifiedAmount! >= property.price;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-64">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-sm font-semibold
          ${property.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-white text-gray-800'}`}>
          {property.status === 'for-sale' ? 'For Sale' : 
            property.status.charAt(0).toUpperCase() + property.status.slice(1)}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{property.title}</h3>
          <p className="text-lg font-bold text-blue-600">
            {formatCurrency(property.price)}
          </p>
        </div>
        
        <p className="text-gray-600 mb-4">{property.location}</p>
        
        <div className="grid grid-cols-4 gap-2 mb-4">
          <div className="flex items-center gap-1 text-gray-600">
            <BedDouble className="w-4 h-4" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <Bath className="w-4 h-4" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <Square className="w-4 h-4" />
            <span>{property.sqft.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <Home className="w-4 h-4" />
            <span className="capitalize">{property.type}</span>
          </div>
        </div>
        
        {user.isPreQualified ? (
          <button
            className={`w-full py-2 px-4 rounded-md font-medium ${
              canAfford
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-red-100 text-red-600 cursor-not-allowed'
            }`}
            disabled={!canAfford}
          >
            {canAfford ? 'Contact Broker' : 'Above Pre-Qualified Amount'}
          </button>
        ) : (
          <button
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700"
          >
            Pre-Qualify Now
          </button>
        )}
      </div>
    </div>
  );
}