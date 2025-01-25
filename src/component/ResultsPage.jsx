// src/components/ResultsPage.jsx
function ResultsPage({ results }) {
    return (
      <div>
        <h1>Results</h1>
        <p>Diagnosis: {results.diagnosis}</p>
        {results.type && <p>Type: {results.type}</p>}
        <p>
          Disclaimer: The information provided here is for general informational purposes only and
          is based on the details you have shared. It is not a substitute for professional advice,
          diagnosis, or treatment. For personalized guidance and to achieve the best results,
          please consult a licensed professional in the relevant field. If you are experiencing a
          medical emergency, please call 911 or your local emergency number immediately.
        </p>
      </div>
    );
  }
  
  export default ResultsPage;