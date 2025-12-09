import { useState, useContext } from "react";
import { INTERESTS } from "../data/interests";
import { AuthContext } from "../context/AuthContext";
import { updateInterests } from "../api/interests";
import { useNavigate } from "react-router-dom";

function Interests() {
  const [selected, setSelected] = useState([]);
  const { token, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleInterest = (interest) => {
    setSelected((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSave = async () => {
    if (selected.length === 0) {
      alert("Please select at least one interest.");
      return;
    }

    try {
      await updateInterests(token, selected);
      navigate("/recommendations");
    } catch (err) {
      console.log("Interest Error:", err.response?.data || err.message);
      alert("Failed to save interests.");
    }
  };



  return (
  
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10 px-4 pt-24">
      <h2 className="text-3xl font-bold mb-6">Select Your Interests</h2>
      <p className="text-gray-600 mb-6">
        Choose topics you like so we can match you with the right people.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-2xl">
        {INTERESTS.map((interest) => (
          <div
            key={interest}
            onClick={() => toggleInterest(interest)}
            className={`cursor-pointer p-4 text-center rounded-lg border transition ${
              selected.includes(interest)
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
            }`}
          >
            {interest}
          </div>
        ))}
      </div>

      <button
        onClick={handleSave}
        className="mt-8 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Continue
      </button>
    </div>
  );
}

export default Interests;
