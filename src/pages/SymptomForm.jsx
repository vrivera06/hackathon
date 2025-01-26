// src/components/SymptomForm.jsx
import { useState } from "react";

function SymptomForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    smokes: "no",
    physicalActivity: "low",
    pollenExposure: "no",
    dustExposure: "no",
    petAllergy: "no",
    familyHistory: "no",
    wheezing: "no",
    shortnessOfBreath: "no",
    chestTightness: "no",
    coughing: "no",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="symptom-form">
      <h1>Asthma Symptom Checker</h1>
      <form onSubmit={handleSubmit}>
        {/* Age */}
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

        {/* Gender */}
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>

        {/* Do you smoke? */}
        <label>
          Do you smoke?
          <select name="smokes" value={formData.smokes} onChange={handleChange} required>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </label>

        {/* Physical Activity */}
        <label>
          How physically active are you?
          <select
            name="physicalActivity"
            value={formData.physicalActivity}
            onChange={handleChange}
            required
          >
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </label>

        {/* Pollen Exposure */}
        <label>
          Pollen Exposure:
          <select
            name="pollenExposure"
            value={formData.pollenExposure}
            onChange={handleChange}
            required
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </label>

        {/* Dust Exposure */}
        <label>
          Dust Exposure:
          <select
            name="dustExposure"
            value={formData.dustExposure}
            onChange={handleChange}
            required
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </label>

        {/* Pet Allergy */}
        <label>
          Pet Allergy:
          <select
            name="petAllergy"
            value={formData.petAllergy}
            onChange={handleChange}
            required
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </label>

        {/* Family History of Asthma */}
        <label>
          Family History of Asthma:
          <select
            name="familyHistory"
            value={formData.familyHistory}
            onChange={handleChange}
            required
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </label>

        {/* Wheezing */}
        <label>
          Wheezing:
          <select
            name="wheezing"
            value={formData.wheezing}
            onChange={handleChange}
            required
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </label>

        {/* Shortness of Breath */}
        <label>
          Shortness of Breath:
          <select
            name="shortnessOfBreath"
            value={formData.shortnessOfBreath}
            onChange={handleChange}
            required
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </label>

        {/* Chest Tightness */}
        <label>
          Chest Tightness:
          <select
            name="chestTightness"
            value={formData.chestTightness}
            onChange={handleChange}
            required
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </label>

        {/* Coughing */}
        <label>
          Coughing:
          <select
            name="coughing"
            value={formData.coughing}
            onChange={handleChange}
            required
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </label>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SymptomForm;