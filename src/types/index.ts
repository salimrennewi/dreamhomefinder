export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  imageUrl: string;
  type: 'house' | 'apartment' | 'condo';
  status: 'for-sale' | 'pending' | 'sold';
}

export interface User {
  id: string;
  isAuthenticated: boolean;
  isPreQualified: boolean;
  preQualifiedAmount?: number;
}

export interface PreQualificationForm {
  annualIncome: number;
  creditScore: number;
  monthlyDebts: number;
  downPayment: number;
  employmentStatus: 'employed' | 'self-employed' | 'retired';
}