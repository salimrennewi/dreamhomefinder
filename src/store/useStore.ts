import { create } from 'zustand';
import type { User, Property, PreQualificationForm } from '../types';

interface Store {
  user: User;
  properties: Property[];
  showPreQualification: boolean;
  filters: {
    minPrice: number;
    maxPrice: number;
    bedrooms: number;
    bathrooms: number;
    propertyType: string[];
  };
  setUser: (user: User) => void;
  setProperties: (properties: Property[]) => void;
  setFilters: (filters: Partial<Store['filters']>) => void;
  setShowPreQualification: (show: boolean) => void;
  preQualify: (form: PreQualificationForm) => void;
}

export const useStore = create<Store>((set) => ({
  user: {
    id: '',
    isAuthenticated: false,
    isPreQualified: false,
  },
  properties: [],
  showPreQualification: false,
  filters: {
    minPrice: 0,
    maxPrice: 1000000,
    bedrooms: 0,
    bathrooms: 0,
    propertyType: [],
  },
  setUser: (user) => set({ user }),
  setProperties: (properties) => set({ properties }),
  setFilters: (filters) => set((state) => ({
    filters: { ...state.filters, ...filters },
  })),
  setShowPreQualification: (show) => set({ showPreQualification: show }),
  preQualify: (form) => {
    // Simple pre-qualification logic (in reality, this would be more complex)
    const maxLoanAmount = (form.annualIncome * 4) + form.downPayment;
    set((state) => ({
      user: {
        ...state.user,
        isPreQualified: true,
        preQualifiedAmount: maxLoanAmount,
      },
      showPreQualification: false,
    }));
  },
}));