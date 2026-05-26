"use client";
import { useState } from "react";

export default function Home() {
  const [wakeUp, setWakeUp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Uyandığın saat: ${wakeUp}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black">
      <main className="flex flex-col items-center gap-6 p-8 bg-white dark:bg-black rounded-lg">
        <h1 className="text-3xl font-bold text-black dark:text-zinc-50">
          Günlük Planlayıcı
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="text-black dark:text-zinc-50">Uyandığın Saat:</label>
          <input
            type="time"
            value={wakeUp}
            onChange={(e) => setWakeUp(e.target.value)}
            className="border p-2 rounded text-black"
          />
          <button
            type="submit"
            className="bg-[#E30613] text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Planla
          </button>
        </form>
      </main>
    </div>
  );
}
