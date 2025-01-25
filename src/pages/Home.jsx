// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to HealthPredict</h1>
      <p>Your AI-driven health companion.</p>

      {/* Button for tracking symptoms */}
      <div className="button-container">
        <Link to="/symptom-checker">
          <button className="track-button">Track Your Symptoms</button>
        </Link>
      </div>

      {/* Disclaimer message at the bottom */}
      <div className="disclaimer">
        <p>
          Disclaimer: The information provided here is for general informational purposes only and
          is based on the details you have shared. It is not a substitute for professional advice,
          diagnosis, or treatment. For personalized guidance and to achieve the best results,
          please consult a licensed professional in the relevant field. If you are experiencing a
          medical emergency, please call 911 or your local emergency number immediately.
        </p>
      </div>
    </div>
  );
}

export default Home;