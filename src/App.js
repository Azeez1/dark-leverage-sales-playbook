import Calculator from './components/Calculator.js';

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">DARK Leverage Sales Playbook</h1>
      <p className="mb-4">Welcome! Adjust the values below to see potential income.</p>
      <Calculator />
    </div>
  );
}
