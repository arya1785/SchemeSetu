import Navbar from "../components/Navbar";

import {
  useEffect,
  useState,
} from "react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

function Results() {

  const navigate =
    useNavigate();

  const location =
    useLocation();

  const queryParams =
    new URLSearchParams(
      location.search
    );



  const occupation =
    queryParams.get(
      "occupation"
    ) || "";

  const state =
    queryParams.get(
      "state"
    ) || "";

  const income =
    Number(
      queryParams.get(
        "income"
      )
    ) || 0;



  const [
    filteredSchemes,
    setFilteredSchemes,
  ] = useState([]);




  useEffect(() => {

    fetch(
      "http://localhost:5000/api/schemes"
    )

      .then((response) =>
        response.json()
      )

      .then((data) => {

        const scoredSchemes =

          data.map((scheme) => {

            let score = 0;



            if (

              scheme.occupation
              &&

              scheme.occupation
                .toLowerCase()

              ===

              occupation
                .toLowerCase()

            ) {

              score += 40;
            }



            if (
              scheme.state === state
            ) {

              score += 30;
            }



            if (
              scheme.schemeType
              === "National"
            ) {

              score += 15;
            }



            if (
              income <=
              scheme.incomeLimit
            ) {

              score += 25;
            }



            return {
              ...scheme,
              score,
            };
          });



        const filtered =

          scoredSchemes

            .filter(
              (scheme) =>
                scheme.score > 0
            )

            .sort(
              (a, b) =>
                b.score - a.score
            );



        setFilteredSchemes(
          filtered
        );
      })

      .catch((error) => {

        console.log(error);
      });

  }, [
    occupation,
    state,
    income,
  ]);




  const saveScheme =
    (scheme) => {

      let savedSchemes =

        JSON.parse(
          localStorage.getItem(
            "savedSchemes"
          )
        ) || [];



      const alreadySaved =
        savedSchemes.find(

          (item) =>
            item._id ===
            scheme._id
        );



      if (!alreadySaved) {

        savedSchemes.push(
          scheme
        );



        localStorage.setItem(

          "savedSchemes",

          JSON.stringify(
            savedSchemes
          )
        );



        alert(
          "Scheme Saved"
        );
      }

      else {

        alert(
          "Scheme Already Saved"
        );
      }
    };




  return (
    <>
      <Navbar />



      <div className="results-container">

        <h1 className="results-heading">
          Recommended Schemes
        </h1>



        <div className="results-grid">

          {filteredSchemes.length > 0 ? (

            filteredSchemes.map(
              (scheme) => (

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



                    <span className="score-badge">
                      Score:
                      {" "}
                      {scheme.score}
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
                        Department:
                      </strong>

                      {" "}

                      {
                        scheme.department
                      }
                    </p>



                    <p>
                      <strong>
                        Income Limit:
                      </strong>

                      {" "}

                      ₹
                      {
                        scheme.incomeLimit
                      }
                    </p>

                  </div>



                  <div className="card-buttons">

                    <button
                      onClick={() =>
                        saveScheme(
                          scheme
                        )
                      }
                    >
                      Save
                    </button>



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
              )
            )

          ) : (

            <p>
              No matching schemes found.
            </p>

          )}

        </div>

      </div>
    </>
  );
}

export default Results;