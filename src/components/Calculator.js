import { useState } from 'react';

export default function Calculator() {
  const [annualDeals, setAnnualDeals] = useState(20);
  const [averageDealSize, setAverageDealSize] = useState(1000000);
  const [successRate, setSuccessRate] = useState(0.4);

  const result = calculateBrokerIncome({
    annualDeals,
    averageDealSize,
    successRate,
  });

  return (
    <div className="p-4 bg-white rounded shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-2">Broker Income Calculator</h2>
      <div className="space-y-2">
        <label className="block" title="How many businesses you attempt to sell each year">
          Deals per year: {annualDeals}
          <input type="range" min="10" max="50" value={annualDeals} onChange={e => setAnnualDeals(parseInt(e.target.value, 10))} className="w-full" />
        </label>
        <label className="block" title="Typical sale price for your deals">
          Average deal size ($):
          <input type="number" value={averageDealSize} onChange={e => setAverageDealSize(parseInt(e.target.value, 10))} className="w-full border" />
        </label>
        <label className="block" title="Percentage of deals that successfully close">
          Success rate: {Math.round(successRate*100)}%
          <input type="range" min="0.2" max="0.7" step="0.01" value={successRate} onChange={e => setSuccessRate(parseFloat(e.target.value))} className="w-full" />
        </label>
      </div>
      <div className="mt-4">
        <p>Current Income: ${result.currentIncome.toLocaleString()}</p>
        <p>Total Additional Income: ${result.totalAdditionalIncome.toLocaleString()}</p>
      </div>
    </div>
  );
}

export function calculateBrokerIncome(inputs) {
  const { annualDeals, averageDealSize, successRate, commissionRate = 0.08 } = inputs;
  const currentIncome = annualDeals * successRate * averageDealSize * commissionRate;
  const failedDeals = annualDeals * (1 - successRate);
  const darkReferrals = Math.floor(failedDeals * 0.6);
  const standardReferrals = Math.floor(darkReferrals * 0.4);
  const premiumReferrals = Math.floor(darkReferrals * 0.4);
  const eliteReferrals = Math.floor(darkReferrals * 0.2);
  const referralIncome =
    standardReferrals * 25000 * 0.15 +
    premiumReferrals * 65000 * 0.15 +
    eliteReferrals * 125000 * 0.15;
  const recurringIncome = darkReferrals * 2000 * 0.15 * 12;
  const equityUpside = darkReferrals * 150000;
  return {
    currentIncome,
    failedDeals,
    darkReferrals,
    referralIncome,
    recurringIncome,
    equityUpside,
    totalAdditionalIncome: referralIncome + recurringIncome + equityUpside,
  };
}
