import Navbar from "../components/Navbar";

import heroImage from "../assets/hero.png";

import {
  FaSearch,
  FaUserCheck,
  FaLandmark,
  FaShieldAlt,
  FaCheckCircle,
  FaDatabase,
} from "react-icons/fa";

import {
  useNavigate,
} from "react-router-dom";

function Home() {

  const navigate =
    useNavigate();



  return (
    <>
      <Navbar />



      {/* BACKGROUND BLOBS */}

      <div className="blob blob1"></div>

      <div className="blob blob2"></div>

      <div className="blob blob3"></div>



      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-left">

          <div className="hero-content">

            <span className="hero-badge">
              Bridging Citizens and Government Welfare
            </span>



            <h1>
              Find the Right
              <br />

              Government
              <span> Schemes </span>

              For You
            </h1>



            <p>
              SchemeSetu helps citizens discover
              Maharashtra and national government
              welfare schemes based on profile,
              occupation, and eligibility.
            </p>



            <div className="hero-buttons">

              <button
                onClick={() =>
                  navigate("/eligibility")
                }
              >
                Check Eligibility
              </button>



              <button
                className="secondary-btn"

                onClick={() =>
                  navigate("/schemes")
                }
              >
                Explore Schemes
              </button>

            </div>



            <div className="hero-mini-cards">

              <div className="mini-card">
                Welfare Schemes
              </div>

              <div className="mini-card">
                Citizen Support
              </div>

              <div className="mini-card">
                Easy Access
              </div>

              <div className="mini-card">
                Trusted Platform
              </div>

            </div>

          </div>

        </div>



        <div className="hero-right">

          <img
            src={heroImage}

            alt="SchemeSetu Hero"
          />

        </div>



        {/* HERO WAVE */}

        <div className="hero-wave">

          <svg
            xmlns="http://www.w3.org/2000/svg"

            viewBox="0 0 1440 320"
          >

            <path
              fillOpacity="1"

              d="M0,224L80,229.3C160,235,320,245,480,224C640,203,800,149,960,149.3C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>

          </svg>

        </div>

      </section>



      {/* FEATURES */}

      <section className="features-section">

        <h2>
          Smart Solutions for Better Governance
        </h2>



        <div className="features-grid">

          <div className="feature-card">

            <div className="feature-icon">
              <FaSearch />
            </div>

            <h3>
              Smart Recommendations
            </h3>

            <p>
              Personalized scheme suggestions
              based on eligibility and profile.
            </p>

          </div>



          <div className="feature-card">

            <div className="feature-icon">
              <FaUserCheck />
            </div>

            <h3>
              Easy Eligibility Check
            </h3>

            <p>
              Quickly discover schemes you qualify
              for using intelligent filtering.
            </p>

          </div>



          <div className="feature-card">

            <div className="feature-icon">
              <FaLandmark />
            </div>

            <h3>
              Maharashtra + National
            </h3>

            <p>
              Access both Maharashtra and
              central government welfare schemes.
            </p>

          </div>

        </div>

      </section>



      {/* TRUST SECTION */}

      <section className="trust-section">

        <h2>
          Trusted Digital Welfare Platform
        </h2>



        <div className="trust-grid">

          <div className="trust-card">

            <FaShieldAlt className="trust-icon" />

            <h3>
              Secure Platform
            </h3>

            <p>
              Secure user authentication and
              protected data access.
            </p>

          </div>



          <div className="trust-card">

            <FaCheckCircle className="trust-icon" />

            <h3>
              Verified Schemes
            </h3>

            <p>
              Access reliable national and
              Maharashtra welfare schemes.
            </p>

          </div>



          <div className="trust-card">

            <FaDatabase className="trust-icon" />

            <h3>
              Smart Recommendation Engine
            </h3>

            <p>
              Intelligent filtering based on
              occupation, income, and state.
            </p>

          </div>

        </div>

      </section>



      {/* STATS */}

      <section className="stats-section">

        <div className="stat-box">

          <h2>50+</h2>

          <p>
            Government Schemes
          </p>

        </div>



        <div className="stat-box">

          <h2>10K+</h2>

          <p>
            Users Reached
          </p>

        </div>



        <div className="stat-box">

          <h2>100%</h2>

          <p>
            Secure Access
          </p>

        </div>



        <div className="stat-box">

          <h2>24/7</h2>

          <p>
            Availability
          </p>

        </div>

      </section>



      {/* CTA SECTION */}

      <section className="cta-section">

        <h2>
          Discover Government Benefits
          Tailored For You
        </h2>



        <p>
          Explore smart recommendations,
          eligibility checks, and trusted
          welfare schemes through SchemeSetu.
        </p>



        <button
          onClick={() =>
            navigate("/eligibility")
          }
        >
          Get Started
        </button>

      </section>



      {/* FOOTER */}

      <footer className="footer">

        <h3>
          SchemeSetu
        </h3>

        <p>
          Bridging Citizens and Government Welfare
        </p>

        <p>
          © 2026 SchemeSetu. All rights reserved.
        </p>

      </footer>
    </>
  );
}

export default Home;