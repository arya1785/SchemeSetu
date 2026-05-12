import Navbar from "../components/Navbar";

import { useEffect, useState } from "react";

function Schemes() {

  const [schemes, setSchemes] =
    useState([]);

  useEffect(() => {

    fetch(
      `${import.meta.env.VITE_API_URL}/api/schemes`
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

        <h1>
          Government Schemes
        </h1>

        <div className="results-grid">

          {schemes.map((scheme) => (

            <div
              className="scheme-card"
              key={scheme._id}
            >

              <h2>
                {scheme.title}
              </h2>

              <p>
                Category:
                {" "}
                {scheme.category}
              </p>

              <p>
                State:
                {" "}
                {scheme.state}
              </p>

              <button>
                View Details
              </button>

            </div>

          ))}

        </div>

      </div>
    </>

  );
}

export default Schemes;