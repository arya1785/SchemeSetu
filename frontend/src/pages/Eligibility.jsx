import Navbar from "../components/Navbar";

import {
  useState,
} from "react";

import {
  useNavigate,
  Navigate,
} from "react-router-dom";

function Eligibility() {

  const navigate =
    useNavigate();




  const isUserLoggedIn =

    localStorage.getItem(
      "userLoggedIn"
    ) === "true";



  if (!isUserLoggedIn) {

    return (
      <Navigate to="/login" />
    );
  }




  const [occupation,
    setOccupation] =
    useState("");

  const [state,
    setState] =
    useState("");

  const [income,
    setIncome] =
    useState("");



  const handleSubmit =
    (e) => {

      e.preventDefault();

      navigate(

        `/results?occupation=${occupation}&state=${state}&income=${income}`

      );
    };




  return (
    <>
      <Navbar />

      <div className="eligibility-container">

        <div className="eligibility-card">

          <h1>
            Check Eligibility
          </h1>

          <p>
            Find schemes based on
            your profile.
          </p>



          <form
            className="eligibility-form"
            onSubmit={handleSubmit}
          >

            <select
              value={occupation}

              onChange={(e) =>
                setOccupation(
                  e.target.value
                )
              }
            >

              <option value="">
                Select Occupation
              </option>

              <option value="student">
                Student
              </option>

              <option value="farmer">
                Farmer
              </option>

              <option value="employee">
                Employee
              </option>

            </select>



            <select
              value={state}

              onChange={(e) =>
                setState(
                  e.target.value
                )
              }
            >

              <option value="">
                Select State
              </option>

              <option value="India">
                India
              </option>

              <option value="Maharashtra">
                Maharashtra
              </option>

            </select>



            <input
              type="number"

              placeholder="Annual Income"

              value={income}

              onChange={(e) =>
                setIncome(
                  e.target.value
                )
              }
            />



            <button type="submit">
              Check Schemes
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default Eligibility;