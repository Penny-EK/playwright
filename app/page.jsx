"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="p-8 font-sans">
      <h1 id="title" className="text-4xl font-bold">
        Playwright Test Page
      </h1>
      <p className="mt-4">Use this page to run simple Playwright tests.</p>

      <div className="mt-4">
        <button id="increment" onClick={() => setCount((i) => i + 1)} className="px-4 py-2 bg-amber-300 border border-gray-400 hover:bg-amber-400 active:bg-amber-500">
          Increment
        </button>
        <span id="count" className="ml-2 px-4 py-2 inline-block">
          {count}
        </span>
      </div>

      <a id="about-link" href="/about" className="mt-4 px-4 py-2 bg-red-500 text-white inline-block hover:bg-red-600 active:bg-red-700">
        About
      </a>
    </main>
  );
}
