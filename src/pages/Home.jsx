import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">Welcome to Asthma Checker</h1>
      <p className="text-gray-700 text-center mt-4">
        Use our AI-driven tool to check for potential asthma symptoms and get recommendations.
      </p>
      <Link
        to="/symptom-checker"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Start Symptom Checker
      </Link>
    </div>
  );
}

export default Home;
