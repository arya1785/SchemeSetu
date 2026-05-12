import Navbar from "../components/Navbar";

import {
  useState,
} from "react";

function Login() {

  const [email,
    setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");



  const handleLogin =
    (e) => {

      e.preventDefault();



      const storedUser =

        JSON.parse(
          localStorage.getItem(
            "user"
          )
        );



      if (
        storedUser
        &&
        storedUser.email ===
          email
        &&
        storedUser.password ===
          password
      ) {

        localStorage.setItem(
          "userLoggedIn",
          "true"
        );



        alert(
          "Login Successful"
        );



        window.location.href =
          "/eligibility";
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

          <h1>
            User Login
          </h1>

          <p>
            Login to continue.
          </p>



          <form
            className="admin-form"
            onSubmit={
              handleLogin
            }
          >

            <input
              type="email"

              placeholder="Email"

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

export default Login;