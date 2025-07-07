import React from 'react';

export default function MainMenu({ onNavigate }) {
  return (
    <div className="space-x-2 mb-4">
      <button className="px-2 py-1 bg-blue-500 text-white rounded" onClick={() => onNavigate('training')}>Start Training</button>
      <button className="px-2 py-1 bg-blue-500 text-white rounded" onClick={() => onNavigate('scenario')}>Practice Scenarios</button>
      <button className="px-2 py-1 bg-blue-500 text-white rounded" onClick={() => onNavigate('progress')}>My Progress</button>
      <button className="px-2 py-1 bg-blue-500 text-white rounded" onClick={() => onNavigate('resources')}>Resources</button>
    </div>
  );
}
