import React from 'react';

export default function CardDraw({ isDrawing }) {
  return (
    <div className="card-container my-8 perspective-1000">
      <div className={`gacha-card ${isDrawing ? 'drawing' : ''}`}>
        <div className="card-question-mark">?</div>
        {isDrawing && (
          <div className="absolute font-bold tracking-widest text-[#a5b4fc] bottom-6 animate-pulse">
            DRAWING...
          </div>
        )}
      </div>
    </div>
  );
}
