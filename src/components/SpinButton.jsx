import React from 'react';

export default function SpinButton({ isSpinning, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={isSpinning}
      className={`w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg shadow-lg transform transition active:scale-95 mb-8 ${
        isSpinning ? 'opacity-70 cursor-not-allowed animate-pulse' : ''
      }`}
    >
      {isSpinning ? '努力抽卡中...' : '抽出今日午餐！'}
    </button>
  );
}
