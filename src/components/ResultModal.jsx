import React, { useEffect } from 'react';
import { COLORS } from '../utils/constants';

export default function ResultModal({ isOpen, winner, onClose }) {
  useEffect(() => {
    if (isOpen) {
      createConfetti();
    }
  }, [isOpen]);

  const createConfetti = () => {
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.backgroundColor = COLORS[Math.floor(Math.random() * COLORS.length)];
      confetti.style.animationDelay = Math.random() * 2 + 's';
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-yellow-100 to-yellow-300 p-1 rounded-3xl shadow-2xl text-center max-w-sm w-full mx-4 transform scale-100">
        <div className="bg-white p-8 rounded-[22px] h-full shadow-inner flex flex-col items-center border-2 border-yellow-200">
          <div className="text-6xl mb-4 drop-shadow-md">✨🍱✨</div>
          <h3 className="text-xl font-bold text-yellow-600 mb-2 tracking-widest bg-yellow-50 px-4 py-1 rounded-full border border-yellow-200">SSR 級午餐！</h3>
          <div className="text-4xl font-black text-slate-800 mb-8 mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            {winner}
          </div>
          <button
            onClick={onClose}
            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition shadow-lg my-2 transform active:scale-95"
          >
            太棒了，就吃這個！
          </button>
        </div>
      </div>
    </div>
  );
}
