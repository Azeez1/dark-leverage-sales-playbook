import { useState } from 'react';
import Calculator from './components/Calculator.js';
import MainMenu from './components/MainMenu.js';
import ScenarioPlayer from './components/ScenarioPlayer.js';
import Progress from './components/Progress.js';

export default function App() {
  const [view, setView] = useState('menu');
  const [points, setPoints] = useState(0);

  function addPoints(p) {
    setPoints(prev => prev + p);
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">DARK Leverage Sales Playbook</h1>
      <Progress points={points} />
      {view === 'menu' && <MainMenu onNavigate={setView} />}
      {view === 'training' && (
        <div>
          <p className="mb-2">Welcome to the training! Start with this scenario.</p>
          <button className="px-2 py-1 bg-blue-500 text-white rounded" onClick={() => setView('scenario')}>Begin Scenario</button>
        </div>
      )}
      {view === 'scenario' && (
        <ScenarioPlayer onComplete={() => setView('menu')} addPoints={addPoints} />
      )}
      {view === 'progress' && (
        <div>
          <p className="mb-2">You have {points} points.</p>
          <button className="px-2 py-1 bg-blue-500 text-white rounded" onClick={() => setView('menu')}>Back to Menu</button>
        </div>
      )}
      {view === 'resources' && (
        <div>
          <p className="mb-2">Resources will unlock as you progress.</p>
          <button className="px-2 py-1 bg-blue-500 text-white rounded" onClick={() => setView('menu')}>Back to Menu</button>
        </div>
      )}
    </div>
  );
}
