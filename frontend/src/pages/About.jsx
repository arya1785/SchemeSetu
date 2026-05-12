import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />

      <div className="page-container">
        <h1>About SchemeSetu</h1>

        <p>
          SchemeSetu is an intelligent government scheme
          eligibility and recommendation platform designed to
          bridge citizens and welfare services.
        </p>
      </div>
    </>
  );
}

export default About;