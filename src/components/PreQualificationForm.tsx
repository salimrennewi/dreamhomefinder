import React, { useState } from 'react';
import { useStore } from '../store/useStore';

export function PreQualificationForm() {
  const preQualify = useStore((state) => state.preQualify);
  const [formData, setFormData] = useState({
    annualIncome: '',
    creditScore: '',
    monthlyDebts: '',
    downPayment: '',
    employmentStatus: 'employed' as const,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    preQualify({
      ...formData,
      annualIncome: Number(formData.annualIncome),
      creditScore: Number(formData.creditScore),
      monthlyDebts: Number(formData.monthlyDebts),
      downPayment: Number(formData.downPayment),
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Get Pre-Qualified</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Annual Income
          </label>
          <input
            type="number"
            value={formData.annualIncome}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              annualIncome: e.target.value
            }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Credit Score
          </label>
          <input
            type="number"
            min="300"
            max="850"
            value={formData.creditScore}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              creditScore: e.target.value
            }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Monthly Debts
          </label>
          <input
            type="number"
            value={formData.monthlyDebts}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              monthlyDebts: e.target.value
            }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Down Payment
          </label>
          <input
            type="number"
            value={formData.downPayment}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              downPayment: e.target.value
            }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Employment Status
          </label>
          <select
            value={formData.employmentStatus}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              employmentStatus: e.target.value as any
            }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="employed">Employed</option>
            <option value="self-employed">Self-Employed</option>
            <option value="retired">Retired</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Get Pre-Qualified
        </button>
      </form>
    </div>
  );
}