import Navbar from "../components/Navbar";

import {
  useEffect,
  useState,
} from "react";

import {
  Navigate,
} from "react-router-dom";

function SavedSchemes() {

  const [savedSchemes,
    setSavedSchemes] =
    useState([]);




  const isUserLoggedIn =

    localStorage.getItem(
      "userLoggedIn"
    ) === "true";



  if (!isUserLoggedIn) {

    return (
      <Navigate to="/login" />
    );
  }




  useEffect(() => {

    const schemes =

      JSON.parse(
        localStorage.getItem(
          "savedSchemes"
        )
      ) || [];



    setSavedSchemes(
      schemes
    );

  }, []);




  const removeScheme =
    (_id) => {

      const updatedSchemes =

        savedSchemes.filter(

          (scheme) =>
            scheme._id !== _id
        );



      localStorage.setItem(

        "savedSchemes",

        JSON.stringify(
          updatedSchemes
        )
      );



      setSavedSchemes(
        updatedSchemes
      );
    };




  return (
    <>
      <Navbar />

      <div className="results-container">

        <h1>
          Saved Schemes
        </h1>



        <div className="results-grid">

          {savedSchemes.length > 0 ? (

            savedSchemes.map(
              (scheme) => (

                <div
                  className="scheme-card"
                  key={scheme._id}
                >

                  <h2>
                    {scheme.title}
                  </h2>

                  <p>
                    {
                      scheme.description
                    }
                  </p>

                  <p>
                    <strong>
                      Category:
                    </strong>

                    {" "}

                    {
                      scheme.category
                    }
                  </p>



                  <button
                    onClick={() =>
                      removeScheme(
                        scheme._id
                      )
                    }
                  >
                    Remove
                  </button>

                </div>
              )
            )

          ) : (

            <p>
              No saved schemes.
            </p>

          )}

        </div>

      </div>
    </>
  );
}

export default SavedSchemes;