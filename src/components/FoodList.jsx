import React, { useState } from 'react';
import { MIN_OPTIONS } from '../utils/constants';

export default function FoodList({ options, onRemove, onAdd }) {
  const [input, setInput] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleAddOption = () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) {
      showAlert('請輸入食物名稱');
      return;
    }
    if (options.includes(trimmedInput)) {
      showAlert('此選項已存在');
      return;
    }
    onAdd(trimmedInput);
    setInput('');
  };

  const handleRemoveOption = (index) => {
    if (options.length <= MIN_OPTIONS) {
      showAlert(`最少需要保留 ${MIN_OPTIONS} 個選項才能轉動喔！`);
      return;
    }
    onRemove(index);
  };

  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => setAlertMessage(''), 2000);
  };

  return (
    <div className="w-full border-t border-slate-100 pt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-slate-700">美食清單</h2>
        <span className="text-sm text-slate-400">{options.length} 個選項</span>
      </div>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleAddOption();
            }
          }}
          placeholder={alertMessage || '新增想吃的...'}
          className={`flex-1 px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            alertMessage ? 'bg-red-50' : ''
          }`}
        />
        <button
          onClick={handleAddOption}
          className="px-4 py-2 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition"
        >
          新增
        </button>
      </div>

      <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-100 group"
          >
            <span className="text-slate-700">{option}</span>
            <button
              onClick={() => handleRemoveOption(index)}
              className="text-slate-300 hover:text-red-500 transition"
              title="刪除"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
