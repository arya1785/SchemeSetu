import Navbar from "../components/Navbar";

import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

function Schemes() {

  const navigate =
    useNavigate();

  const [schemes,
    setSchemes] =
    useState([]);




  useEffect(() => {

    fetch(
      "http://localhost:5000/api/schemes"
    )

      .then((response) =>
        response.json()
      )

      .then((data) => {

        setSchemes(data);
      })

      .catch((error) => {

        console.log(error);
      });

  }, []);




  return (
    <>
      <Navbar />



      <div className="results-container">

        <h1 className="results-heading">
          Government Schemes
        </h1>



        <div className="results-grid">

          {schemes.map((scheme) => (

            <div
              className="scheme-card"
              key={scheme._id}
            >

              <div className="card-top">

                <span className="scheme-badge">
                  {
                    scheme.schemeType
                  }
                </span>

              </div>



              <h2>
                {scheme.title}
              </h2>



              <p>
                {
                  scheme.description
                }
              </p>



              <div className="scheme-info">

                <p>
                  <strong>
                    Category:
                  </strong>

                  {" "}

                  {
                    scheme.category
                  }
                </p>



                <p>
                  <strong>
                    State:
                  </strong>

                  {" "}

                  {
                    scheme.state
                  }
                </p>



                <p>
                  <strong>
                    Department:
                  </strong>

                  {" "}

                  {
                    scheme.department
                  }
                </p>

              </div>



              <div className="card-buttons">

                <button
                  className="details-btn"

                  onClick={() =>
                    navigate(
                      `/scheme/${scheme._id}`
                    )
                  }
                >
                  View Details
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </>
  );
}

export default Schemes;