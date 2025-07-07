import React from 'react';

export default function Progress({ points }) {
  const percentage = Math.min(100, points);
  return (
    <div className="mb-4">
      <div className="h-2 bg-gray-300 rounded">
        <div className="h-2 bg-green-500 rounded" style={{ width: `${percentage}%` }}></div>
      </div>
      <p className="text-sm mt-1">Points: {points}</p>
    </div>
  );
}
