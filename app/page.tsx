"use client";

import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState<"Cara" | "Coroa" | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipClass, setFlipClass] = useState("");

  const flipCoin = () => {
    setIsFlipping(true);
    setResult(null);

    // Define o resultado aleatório
    const outcome = Math.random() > 0.5 ? "Cara" : "Coroa";

    // Simula uma animação de giro de 2 segundos
    setTimeout(() => {
      setResult(outcome);
      setIsFlipping(false);
      setFlipClass(outcome === "Cara" ? "rotateY-0" : "rotateY-180");
    }, 2000);
  };

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col justify-center items-center">

      <div className={`relative w-36 h-36 ${isFlipping ? "flip" : flipClass} perspective-1000`}>
        {/* Frente: Cara */}
        <div className={`absolute inset-0 flex justify-center items-center rounded-full text-2xl font-bold backface-hidden bg-yellow-500 ${flipClass === "rotateY-180" ? "hidden" : ""}`}>
          Cara
        </div>
        {/* Verso: Coroa */}
        <div className={`absolute inset-0 flex justify-center items-center rounded-full text-2xl font-bold backface-hidden bg-gray-400 transform rotate-y-180 ${flipClass === "rotateY-0" ? "hidden" : ""}`}>
          Coroa
        </div>
      </div>

      {result && !isFlipping && (
        <p className="text-2xl mt-4">Resultado: {result}</p>
      )}

      <button
        onClick={flipCoin}
        className="mt-6 px-6 py-3 bg-blue-600 rounded-full text-lg font-semibold hover:bg-blue-700 transition disabled:bg-blue-400"
        disabled={isFlipping}
      >
        {isFlipping ? "Girando..." : "Jogar"}
      </button>
    </div>
  );
}
