"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("#000000");
  const [sneakerImg, setSneakerImg] = useState("/sneaker-base.png");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const generateSneaker = () => {
    alert("🎨 AI Sneaker design feature coming soon!");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
        👟 AI Sneaker Customizer
      </h1>

      <div className="relative w-80 h-80 mb-8">
        <Image
          src={sneakerImg}
          alt="Sneaker Preview"
          fill
          className="object-contain transition-all"
          style={{ filter: `drop-shadow(0 0 20px ${color})` }}
        />
      </div>

      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        className="w-24 h-12 rounded-lg border-none cursor-pointer mb-4"
      />

      <button
        onClick={generateSneaker}
        className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 font-semibold hover:opacity-90 transition"
      >
        Generate AI Sneaker
      </button>

      <p className="mt-6 text-gray-400 text-sm">
        Choose your color and let AI design your dream sneakers ✨
      </p>
    </main>
  );
}
