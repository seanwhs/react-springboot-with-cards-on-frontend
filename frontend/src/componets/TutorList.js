// TutorList.js
import React, { useState, useEffect } from "react";
import TutorDataService from "../services/tutor-service";
import { Link } from "react-router-dom";

export default function TutorList() {
  const [tutors, setTutors] = useState([]);
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveTutors();
  }, []);

  const retrieveTutors = () => {
    TutorDataService.getAll()
      .then(response => {
        setTutors(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveTutors();
    setCurrentTutorial(null);
    setCurrentIndex(-1);
  };

  const setActiveTutorial = (tutor, index) => {
    setCurrentTutorial(tutor);
    setCurrentIndex(index);
  };

  const removeAllTutors = () => {
    TutorDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    TutorDataService.findByFirstName(searchTitle)
      .then(response => {
        setTutors(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const onChangeSearchTitle = (e) => {
    const title = e.target.value;
    setSearchTitle(title);
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Tutors List</h4>

        <ul className="list-group">
          {tutors &&
            tutors.map((tutor, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveTutorial(tutor, index)}
                key={index}
              >
                {tutor.firstName} {tutor.lastName}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllTutors}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentTutorial ? (
          <div>
            <h4>Tutor</h4>
            <div>
              <label>
                <strong>First Name:</strong>
              </label>{" "}
              {currentTutorial.firstName}
            </div>
            <div>
              <label>
                <strong>Last Name:</strong>
              </label>{" "}
              {currentTutorial.lastName}
            </div>
            <div>
              <label>
                <strong>Credential:</strong>
              </label>{" "}
              {currentTutorial.credential}
            </div>
            {/* You can add more details here */}
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutor...</p>
          </div>
        )}
      </div>
    </div>
  );
}
