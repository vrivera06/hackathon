// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to HealthPredict</h1>
      <p>Your AI-driven health companion.</p>
      <Link to="/symptom-checker">
        <button>Check Symptoms</button>
      </Link>
    </div>
  );
}

export default Home;