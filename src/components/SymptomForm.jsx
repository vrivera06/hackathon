// src/components/SymptomForm.jsx
import { useState } from "react";

function SymptomForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    smokes: false,
    physicalActivity: "",
    pollenExposure: false,
    dustExposure: false,
    petAllergy: false,
    familyHistory: false,
    wheezing: false,
    shortnessOfBreath: false,
    chestTightness: false,
    coughing: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="symptom-form">
      <form onSubmit={handleSubmit}>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Do you smoke?
          <input
            type="checkbox"
            name="smokes"
            checked={formData.smokes}
            onChange={handleChange}
          />
        </label>
        <label>
          How physically active are you?
          <select
            name="physicalActivity"
            value={formData.physicalActivity}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </label>
        <label>
          Pollen Exposure:
          <input
            type="checkbox"
            name="pollenExposure"
            checked={formData.pollenExposure}
            onChange={handleChange}
          />
        </label>
        <label>
          Dust Exposure:
          <input
            type="checkbox"
            name="dustExposure"
            checked={formData.dustExposure}
            onChange={handleChange}
          />
        </label>
        <label>
          Pet Allergy:
          <input
            type="checkbox"
            name="petAllergy"
            checked={formData.petAllergy}
            onChange={handleChange}
          />
        </label>
        <label>
          Family History of Asthma:
          <input
            type="checkbox"
            name="familyHistory"
            checked={formData.familyHistory}
            onChange={handleChange}
          />
        </label>
        <label>
          Wheezing:
          <input
            type="checkbox"
            name="wheezing"
            checked={formData.wheezing}
            onChange={handleChange}
          />
        </label>
        <label>
          Shortness of Breath:
          <input
            type="checkbox"
            name="shortnessOfBreath"
            checked={formData.shortnessOfBreath}
            onChange={handleChange}
          />
        </label>
        <label>
          Chest Tightness:
          <input
            type="checkbox"
            name="chestTightness"
            checked={formData.chestTightness}
            onChange={handleChange}
          />
        </label>
        <label>
          Coughing:
          <input
            type="checkbox"
            name="coughing"
            checked={formData.coughing}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SymptomForm;