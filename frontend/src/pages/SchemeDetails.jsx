import Navbar from "../components/Navbar";

import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

function SchemeDetails() {

  const { id } =
    useParams();



  const [scheme,
    setScheme] =
    useState(null);




  useEffect(() => {

    fetch(
      `http://localhost:5000/api/schemes/${id}`
    )

      .then((response) =>
        response.json()
      )

      .then((data) => {

        setScheme(data);
      })

      .catch((error) => {

        console.log(error);
      });

  }, [id]);




  if (!scheme) {

    return (
      <>
        <Navbar />

        <div className="loader-container">

          <div className="loader"></div>

          <p>
            Loading Scheme Details...
          </p>

        </div>
      </>
    );
  }




  return (
    <>
      <Navbar />



      <div className="scheme-details-page">

        <div className="details-hero">

          <span className="details-badge">
            {scheme.schemeType}
          </span>



          <h1>
            {scheme.title}
          </h1>



          <p>
            {scheme.description}
          </p>

        </div>



        <div className="details-grid">

          <div className="details-box">

            <h3>
              Category
            </h3>

            <p>
              {scheme.category}
            </p>

          </div>



          <div className="details-box">

            <h3>
              State
            </h3>

            <p>
              {scheme.state}
            </p>

          </div>



          <div className="details-box">

            <h3>
              Department
            </h3>

            <p>
              {scheme.department}
            </p>

          </div>



          <div className="details-box">

            <h3>
              Eligibility
            </h3>

            <p>
              {scheme.eligibility}
            </p>

          </div>



          <div className="details-box">

            <h3>
              Occupation
            </h3>

            <p>
              {scheme.occupation}
            </p>

          </div>



          <div className="details-box">

            <h3>
              Income Limit
            </h3>

            <p>
              ₹{scheme.incomeLimit}
            </p>

          </div>

        </div>



        <div className="apply-section">

          <a
            href={
              scheme.applicationLink
            }

            target="_blank"

            rel="noreferrer"
          >

            <button className="apply-btn">
              Apply for Scheme
            </button>

          </a>

        </div>

      </div>
    </>
  );
}

export default SchemeDetails;