import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './App.tsx';
import './index.css';
import 'uplot/dist/uPlot.min.css';
import 'react-toastify/dist/ReactToastify.css';
import ConvexClientProvider from './components/ConvexClientProvider.tsx';
import { api } from "../convex/_generated/api";
import { useMutation } from "convex/react";

// Optional helper if you have a frontend hook file
async function callInitWorld() {
  try {
    const result = await api.world.initWorld({});
    console.log("🌍 World initialized:", result);
  } catch (err) {
    console.error("❌ Error initializing world:", err);
  }
}

callInitWorld(); // <-- runs once on load
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConvexClientProvider>
      <Home />
    </ConvexClientProvider>
  </React.StrictMode>,
);
