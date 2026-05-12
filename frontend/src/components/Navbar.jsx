import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate =
    useNavigate();



  const isAdminLoggedIn =

    localStorage.getItem(
      "adminLoggedIn"
    ) === "true";



  const isUserLoggedIn =

    localStorage.getItem(
      "userLoggedIn"
    ) === "true";



  const handleAdminLogout =
    () => {

      localStorage.removeItem(
        "adminLoggedIn"
      );

      navigate(
        "/admin-login"
      );
    };



  const handleUserLogout =
    () => {

      localStorage.removeItem(
        "userLoggedIn"
      );

      navigate(
        "/login"
      );
    };



  return (
    <nav className="navbar">

      <div
        className="logo-section"
      >

        <div className="logo-circle">
          S
        </div>

        <h2 className="logo">
          SchemeSetu
        </h2>

      </div>



      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/schemes">
          Schemes
        </Link>

        <Link to="/saved">
          Saved
        </Link>

        <Link to="/about">
          About
        </Link>



        {isUserLoggedIn && (

          <Link to="/profile">
            Profile
          </Link>

        )}



        {!isUserLoggedIn ? (

          <>
            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Register
            </Link>
          </>

        ) : (

          <button
            className="logout-btn"
            onClick={
              handleUserLogout
            }
          >
            Logout
          </button>

        )}



        {!isAdminLoggedIn ? (

          <Link
            className="admin-link"
            to="/admin-login"
          >
            Admin
          </Link>

        ) : (

          <button
            className="logout-btn"
            onClick={
              handleAdminLogout
            }
          >
            Admin Logout
          </button>

        )}

      </div>

    </nav>
  );
}

export default Navbar;