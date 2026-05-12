import Navbar from "../components/Navbar";

import {
  Navigate,
} from "react-router-dom";

function Profile() {

  const isUserLoggedIn =

    localStorage.getItem(
      "userLoggedIn"
    ) === "true";



  if (!isUserLoggedIn) {

    return (
      <Navigate to="/login" />
    );
  }




  const user =

    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );



  return (
    <>
      <Navbar />

      <div className="admin-container">

        <div className="admin-card">

          <h1>
            User Profile
          </h1>



          <div
            className="profile-info"
          >

            <p>

              <strong>
                Name:
              </strong>

              {" "}

              {user.name}

            </p>



            <p>

              <strong>
                Email:
              </strong>

              {" "}

              {user.email}

            </p>

          </div>

        </div>

      </div>
    </>
  );
}

export default Profile;