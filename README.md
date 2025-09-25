Project Overview
Asthma Insight is a modern, AI-driven web application designed to help users assess potential asthma symptoms through an intuitive questionnaire. The application provides personalized feedback based on user-inputted symptoms and risk factors, all within a beautifully animated and user-friendly interface.


Key Features
Animated Gradient Background: Dynamic color transitions create an engaging visual experience

Interactive Symptom Form: Comprehensive questionnaire covering:

Demographic information (age, gender)

Lifestyle factors (smoking, physical activity)

Environmental exposures (pollen, dust, pet allergies)

Family history

Current symptoms (wheezing, shortness of breath, chest tightness, coughing)

AI-Powered Analysis: Simulated intelligent symptom assessment

Responsive Design: Works seamlessly across desktop and mobile devices

Particle Animation System: Floating particles enhance visual appeal

Professional Disclaimer: Clear medical disclaimer on every relevant page


Technology Stack
Frontend Framework: React 18+

Routing: React Router DOM

Styling: Custom CSS with animations and gradients

Build Tool: Vite (inferred from JSX structure)


Project Structure
text
src/
├── App.jsx                 # Main application router
├── App.css                # Global styles and animations
├── index.css              # Additional utility styles
├── main.jsx               # React DOM entry point
├── pages/
│   └── Home.jsx           # Landing page component
└── components/
    ├── SymptomForm.jsx    # Symptom questionnaire form
    └── ResultsPage.jsx    # Results display component


🚀 Installation & Setup
Clone the repository

bash
git clone [repository-url]
cd asthma-insight
Install dependencies

bash
npm install
Start the development server

bash
npm run dev
Open your browser
Navigate to http://localhost:5173 (or the port shown in your terminal)


Usage Guide
For Users:
Visit the homepage and click "Track Your Symptoms"

Fill out the comprehensive symptom questionnaire

Submit the form to receive AI-generated analysis

Review results with appropriate medical disclaimers

The application uses React functional components with hooks

State management is handled locally within components

Custom CSS animations provide smooth user interactions

Component-based architecture ensures maintainability


Design Features
Color Scheme: Purple to orange gradient transitions

Typography: Segoe UI font family for modern readability

Animations:

Fade-in effects for content loading

Scale transitions for form elements

Floating particle background

Smooth hover effects on interactive elements

Layout: Flexbox-based centering for optimal viewing experience


Important Disclaimer
This application is designed for informational purposes only. The AI analysis is simulated and should not be considered medical advice. Always consult with healthcare professionals for medical diagnoses and treatment.


Future Enhancements
Integration with real AI/ML models for symptom analysis

User authentication and symptom history tracking

Multi-language support

Export functionality for medical consultations

Mobile app development
