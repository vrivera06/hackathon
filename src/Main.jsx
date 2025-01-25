// src/components/Main.jsx
import { useState } from "react";
import SymptomForm from "./components/SymptomForm"; // Correct import path
import ResultsPage from "./components/ResultsPage"; // Correct import path

function Main() {
  const [results, setResults] = useState(null);

  const handleFormSubmit = (data) => {
    // Simulate AI analysis (replace with actual AI logic)
    const analysis = analyzeSymptoms(data);
    setResults(analysis);
  };

  return (
    <div className="main-content">
      <h1>Asthma Symptom Checker</h1>
      {!results ? (
        <SymptomForm onSubmit={handleFormSubmit} />
      ) : (
        <ResultsPage results={results} />
      )}
    </div>
  );
}

// Simulated AI analysis function
const analyzeSymptoms = (data) => {
  const { wheezing, shortnessOfBreath, chestTightness, coughing } = data;
  if (wheezing && shortnessOfBreath && chestTightness && coughing) {
    return { diagnosis: "Potential Asthma", type: "Allergic Asthma" };
  }
  return { diagnosis: "No Asthma Detected", type: null };
};

export default Main;