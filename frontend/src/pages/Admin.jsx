import Navbar from "../components/Navbar";

import {
  useEffect,
  useState,
} from "react";

import { Navigate } from "react-router-dom";

function Admin() {

  if (
    localStorage.getItem(
      "adminLoggedIn"
    ) !== "true"
  ) {

    return (
      <Navigate to="/admin-login" />
    );
  }

  const [title, setTitle] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [state, setState] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [eligibility, setEligibility] =
    useState("");

  const [applicationLink,
    setApplicationLink] =
    useState("");

  const [schemes, setSchemes] =
    useState([]);

  const [editId, setEditId] =
    useState(null);




  const fetchSchemes = async () => {

    try {

      const response = await fetch(
        "http://localhost:5000/api/schemes"
      );

      const data =
        await response.json();

      setSchemes(data);

    }

    catch (error) {

      console.log(error);
    }
  };




  useEffect(() => {

    fetchSchemes();

  }, []);




  const clearForm = () => {

    setTitle("");

    setCategory("");

    setState("");

    setDescription("");

    setEligibility("");

    setApplicationLink("");

    setEditId(null);
  };




  const handleSubmit = async (e) => {

    e.preventDefault();

    const schemeData = {

      title,

      category,

      state,

      description,

      eligibility,

      applicationLink,
    };



    try {

      if (editId) {

        await fetch(
          `http://localhost:5000/api/schemes/${editId}`,
          {

            method: "PUT",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              schemeData
            ),
          }
        );

        alert(
          "Scheme Updated Successfully"
        );
      }

      else {

        await fetch(
          "http://localhost:5000/api/schemes",
          {

            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              schemeData
            ),
          }
        );

        alert(
          "Scheme Added Successfully"
        );
      }



      clearForm();

      fetchSchemes();

    }

    catch (error) {

      console.log(error);
    }
  };




  const handleDelete = async (id) => {

    try {

      await fetch(
        `http://localhost:5000/api/schemes/${id}`,
        {
          method: "DELETE",
        }
      );

      fetchSchemes();

    }

    catch (error) {

      console.log(error);
    }
  };




  const handleEdit = (scheme) => {

    setTitle(scheme.title);

    setCategory(scheme.category);

    setState(scheme.state);

    setDescription(
      scheme.description
    );

    setEligibility(
      scheme.eligibility
    );

    setApplicationLink(
      scheme.applicationLink
    );

    setEditId(scheme._id);
  };




  return (
    <>
      <Navbar />

      <div className="admin-container">

        <div className="admin-card">

          <h1>Admin Dashboard</h1>

          <p>
            Add and manage schemes here.
          </p>




          <form
            className="admin-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              placeholder="Scheme Title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />



            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
            />



            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) =>
                setState(e.target.value)
              }
            />



            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
            />



            <textarea
              placeholder="Eligibility"
              value={eligibility}
              onChange={(e) =>
                setEligibility(
                  e.target.value
                )
              }
            />



            <input
              type="text"
              placeholder="Application Link"
              value={applicationLink}
              onChange={(e) =>
                setApplicationLink(
                  e.target.value
                )
              }
            />



            <button type="submit">

              {editId
                ? "Update Scheme"
                : "Add Scheme"}

            </button>

          </form>




          <div className="admin-schemes">

            <h2>All Schemes</h2>

            {schemes.map((scheme) => (

              <div
                className="admin-scheme-card"
                key={scheme._id}
              >

                <div>

                  <h3>
                    {scheme.title}
                  </h3>

                  <p>
                    {scheme.category}
                  </p>

                </div>



                <div className="admin-actions">

                  <button
                    className="edit-btn"
                    onClick={() =>
                      handleEdit(scheme)
                    }
                  >
                    Edit
                  </button>



                  <button
                    className="delete-btn"
                    onClick={() =>
                      handleDelete(
                        scheme._id
                      )
                    }
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </>
  );
}

export default Admin;