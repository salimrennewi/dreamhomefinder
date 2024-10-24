import React from 'react';
import { PropertyCard } from './PropertyCard';
import { useStore } from '../store/useStore';

export function PropertyGrid() {
  const { properties, filters, user } = useStore();

  const filteredProperties = properties.filter((property) => {
    const priceMatch = property.price >= filters.minPrice && 
      property.price <= filters.maxPrice;
    const bedroomsMatch = !filters.bedrooms || 
      property.bedrooms >= filters.bedrooms;
    const bathroomsMatch = !filters.bathrooms || 
      property.bathrooms >= filters.bathrooms;
    const typeMatch = filters.propertyType.length === 0 || 
      filters.propertyType.includes(property.type);
    
    // If user is pre-qualified, only show affordable properties
    const affordabilityMatch = !user.isPreQualified || 
      property.price <= user.preQualifiedAmount!;

    return priceMatch && bedroomsMatch && bathroomsMatch && 
      typeMatch && affordabilityMatch;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {filteredProperties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}