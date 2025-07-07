import { useState } from 'react';
import Calculator from './Calculator.js';

export default function ScenarioPlayer({ onComplete, addPoints }) {
  const [step, setStep] = useState('intro');
  const [showCalc, setShowCalc] = useState(false);
  const [feedback, setFeedback] = useState('');

  function choose(option) {
    if (option === 'A') {
      setFeedback('The client feels you gave up on them. No referral earned.');
      addPoints(0);
      setStep('end');
    } else if (option === 'B') {
      setFeedback('Great! They are curious about improving operations.');
      addPoints(10);
      setShowCalc(true);
      setStep('calc');
    } else {
      setFeedback('Hiring more people increases cost without fixing processes.');
      addPoints(0);
      setStep('end');
    }
  }

  return (
    <div>
      {step === 'intro' && (
        <div className="space-y-4">
          <p className="italic">A busy broker juggles calls all day. One client says they work 70 hours a week and still can\'t keep up.</p>
          <div>
            <p>How do you respond?</p>
            <button className="block mt-2 px-2 py-1 bg-blue-500 text-white rounded" onClick={() => choose('A')}>A) Selling might not be right now.</button>
            <button className="block mt-2 px-2 py-1 bg-blue-500 text-white rounded" onClick={() => choose('B')}>B) What if you could cut that to 35 hours and improve operations?</button>
            <button className="block mt-2 px-2 py-1 bg-blue-500 text-white rounded" onClick={() => choose('C')}>C) Just hire more people.</button>
          </div>
        </div>
      )}
      {step === 'calc' && (
        <div className="space-y-4">
          <p>{feedback}</p>
          <p>Use this calculator to show potential.</p>
          <Calculator />
          <button className="mt-4 px-2 py-1 bg-green-500 text-white rounded" onClick={() => {setStep('end'); onComplete();}}>Finish Scenario</button>
        </div>
      )}
      {step === 'end' && (
        <div className="space-y-4">
          <p>{feedback}</p>
          <button className="px-2 py-1 bg-blue-500 text-white rounded" onClick={onComplete}>Return to Menu</button>
        </div>
      )}
    </div>
  );
}
