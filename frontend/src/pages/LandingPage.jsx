import { useNavigate } from "react-router-dom";
import heroImg from "../assets/hero.jpg";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-24">
      <div className="min-h-screen bg-white flex flex-col">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 bg-gray-50">
          {/* Left Text Section */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Connect with the Right People,
              <span className="text-blue-600"> Based on Your Interests.</span>
            </h1>

            <p className="text-gray-600 text-lg">
              Discover like-minded individuals, explore community groups, and
              join events tailored to your passions.
            </p>

            <button
              onClick={() => navigate("/signup")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg"
            >
              Get Started
            </button>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img src={heroImg} className="w-3/4 md:w-full" />
          </div>
        </section>

        {/* Features Section */}
        <section className="px-8 md:px-16 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose ConnectPlus?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">
                Smart Recommendations
              </h3>
              <p className="text-gray-600">
                Get matched with users who share your interests using our
                intelligent matching engine.
              </p>
            </div>

            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">
                Interest Based Communities
              </h3>
              <p className="text-gray-600">
                Join or explore groups aligned with your hobbies and passions.
              </p>
            </div>

            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">
                Discover & Join Events
              </h3>
              <p className="text-gray-600">
                Attend events happening in your city that match your interests.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Meet Your People?
          </h2>
          <p className="text-lg mb-6">
            Sign up and start connecting with the community today.
          </p>

          <button
            onClick={() => navigate("/signup")}
            className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-200"
          >
            Join Now
          </button>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
