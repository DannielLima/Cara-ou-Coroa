'use client';
import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState<string | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const flipCoin = () => {
    setIsFlipping(true);

    setTimeout(() => {
      const outcome = Math.random() < 0.5 ? 'Cara' : 'Coroa';
      setResult(outcome);
      setIsFlipping(false);
    }, 2000);
  };

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6">Cara ou Coroa</h1>
      
      {/* Moeda */}
      <div
        className={`w-32 h-32 mb-6 bg-yellow-400 rounded-full flex justify-center items-center text-3xl font-bold 
          transition-transform duration-1000 ${
            isFlipping ? 'animate-spin' : ''
          }`}
        onClick={flipCoin}
      >
        {isFlipping ? '?' : result || 'Clique'}
      </div>

      {result && !isFlipping && (
        <p className="text-2xl mt-4">Resultado: {result}</p>
      )}
      
      <button
        onClick={flipCoin}
        className="px-6 py-3 bg-blue-600 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
        disabled={isFlipping}
      >
        {isFlipping ? 'Girando...' : 'Jogar'}
      </button>
    </div>
  );
}
