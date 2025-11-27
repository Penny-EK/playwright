"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1 id="title">Playwright Test Page</h1>
      <p>Use this page to run simple Playwright tests.</p>

      <div>
        <button id="increment" onClick={() => setCount((i) => i + 1)}>
          Increment
        </button>
        <span id="count">{count}</span>
      </div>

      <a id="about-link" href="/about">
        About
      </a>
    </main>
  );
}
