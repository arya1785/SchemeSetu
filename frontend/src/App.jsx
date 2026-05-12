import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Schemes from "./pages/Schemes";
import About from "./pages/About";
import Eligibility from "./pages/Eligibility";
import Results from "./pages/Results";
import SchemeDetails from "./pages/SchemeDetails";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import SavedSchemes from "./pages/SavedSchemes";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/schemes"
          element={<Schemes />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/eligibility"
          element={<Eligibility />}
        />

        <Route
          path="/results"
          element={<Results />}
        />

        <Route
          path="/scheme/:id"
          element={<SchemeDetails />}
        />

        <Route
          path="/admin"
          element={<Admin />}
        />

        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        <Route
          path="/saved"
          element={<SavedSchemes />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;