import React, { useState } from 'react';
import CardDraw from './components/CardDraw';
import FoodList from './components/FoodList';
import ResultModal from './components/ResultModal';
import SpinButton from './components/SpinButton';
import { DEFAULT_OPTIONS, DRAW_DURATION } from './utils/constants';

export default function App() {
  const [options, setOptions] = useState([...DEFAULT_OPTIONS]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [winner, setWinner] = useState('');

  const handleAddOption = (newOption) => {
    setOptions([...options, newOption]);
  };

  const handleRemoveOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const handleSpin = () => {
    if (isSpinning || options.length < 2) return;

    setIsSpinning(true);

    setTimeout(() => {
      setIsSpinning(false);
      const randomIndex = Math.floor(Math.random() * options.length);
      setWinner(options[randomIndex]);
      setShowResult(true);
    }, DRAW_DURATION);
  };

  const handleCloseResult = () => {
    setShowResult(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 md:p-8">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        {/* Header */}
        <div className="bg-indigo-600 p-6 text-white text-center">
          <h1 className="text-2xl font-bold">中午吃什麼？</h1>
          <p className="text-indigo-100 mt-1">別再糾結了，交給命運吧！</p>
        </div>

        <div className="p-6 flex flex-col items-center">
          {/* Card Draw Section */}
          <CardDraw isDrawing={isSpinning} />

          {/* Action Button */}
          <SpinButton isSpinning={isSpinning} onClick={handleSpin} />

          {/* List Section */}
          <FoodList
            options={options}
            onRemove={handleRemoveOption}
            onAdd={handleAddOption}
          />
        </div>
      </div>

      {/* Result Modal */}
      <ResultModal
        isOpen={showResult}
        winner={winner}
        onClose={handleCloseResult}
      />
    </div>
  );
}
