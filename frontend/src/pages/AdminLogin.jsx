import Navbar from "../components/Navbar";

import { useState } from "react";

import {
  useNavigate,
} from "react-router-dom";

function AdminLogin() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");



  const handleLogin = (e) => {

    e.preventDefault();



    if (
      email ===
        "admin@schemesetu.com"
      &&
      password === "admin123"
    ) {

      localStorage.setItem(
        "adminLoggedIn",
        "true"
      );

      window.location.href =
        "/admin";
    }

    else {

      alert(
        "Invalid Credentials"
      );
    }
  };



  return (
    <>
      <Navbar />

      <div className="admin-container">

        <div className="admin-card">

          <h1>Admin Login</h1>

          <p>
            Login to access admin dashboard.
          </p>



          <form
            className="admin-form"
            onSubmit={handleLogin}
          >

            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
            />



            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
            />



            <button type="submit">
              Login
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default AdminLogin;