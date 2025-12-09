import { useState, useEffect, useContext } from "react";
import Card from "../components/Card";
import { fetchRecommendations } from "../api/recommendations";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Recommendations() {
  const [matches, setMatches] = useState([]);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetchRecommendations(token);
        setMatches(res.data.matches);
      } catch (err) {
        console.log("Recommendation Error:", err.response?.data || err.message);
      }
    };

    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5 pt-24">
      <h2 className="text-3xl font-bold text-center mb-8">Your Matches</h2>

      {/* Matched Users */}
      <div className="max-w-3xl mx-auto mb-10">
        <h3 className="text-2xl font-semibold mb-4">People You May Like</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {matches.length === 0 && (
            <p className="text-gray-600">No matches found yet.</p>
          )}

          {matches.map((user) => (
            <Card
              key={user._id}
              title={user.username}
              subtitle="Shared Interests"
              chips={user.sharedInterests || []}
            />
          ))}
        </div>
      </div>

      {/* Events CTA */}
      <div className="text-center mt-12">
        <button
          onClick={() => navigate("/events")}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer"
        >
          Explore Events
        </button>
      </div>
    </div>
  );
}

export default Recommendations;
