import { Routes, Route, useLocation } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Interests from "./pages/Interests";
import Recommendations from "./pages/Recommendations";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

function App() {
  const location = useLocation();
  const hideNavbar = ["/signup", "/login"].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}
        <Route
          path="/interests"
          element={
            <RequireAuth>
              <Interests />
            </RequireAuth>
          }
        />

        <Route
          path="/recommendations"
          element={
            <RequireAuth>
              <Recommendations />
            </RequireAuth>
          }
        />

        <Route
          path="/events"
          element={
            <RequireAuth>
              <Events />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
