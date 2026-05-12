import Navbar from "../components/Navbar";

import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

function Register() {

  const navigate =
    useNavigate();

  const [name,
    setName] =
    useState("");

  const [email,
    setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");



  const handleRegister =
    (e) => {

      e.preventDefault();



      const user = {
        name,
        email,
        password,
      };



      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );



      alert(
        "Registration Successful"
      );



      navigate("/login");
    };




  return (
    <>
      <Navbar />

      <div className="admin-container">

        <div className="admin-card">

          <h1>
            User Registration
          </h1>

          <p>
            Create your account.
          </p>



          <form
            className="admin-form"
            onSubmit={
              handleRegister
            }
          >

            <input
              type="text"
              placeholder="Full Name"

              value={name}

              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
            />



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
              Register
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default Register;