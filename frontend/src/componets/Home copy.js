// Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TutorialDataService from "../services/tutorial-service";
import TutorDataService from "../services/tutor-service";
import tutorialImage from "../images/tutorial-image.jpg";
import tutorImage from "../images/tutor-image.png";
import TutorList from "./TutorList"; // Import TutorList component

export default function Home() {
  const [tutorials, setTutorials] = useState([]);
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    retrieveTutorials();
    retrieveTutors();
  }, []);

  const retrieveTutorials = () => {
    TutorialDataService.getAll()
      .then((response) => {
        setTutorials(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveTutors = () => {
    TutorDataService.getAll()
      .then((response) => {
        setTutors(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Link to="/tutorials-list" className="text-decoration-none">
            <div className="card">
              <div className="card-header">Tutorials</div>
              <div className="card-body d-flex justify-content-center align-items-center">
                <img
                  src={tutorialImage}
                  className="card-img-top"
                  alt="tutorial-image"
                />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-6">
          <Link to="/tutors-list" className="text-decoration-none">
            <div className="card">
              <div className="card-header">Tutors</div>
              <div className="card-body d-flex justify-content-center align-items-center">
                <img
                  src={tutorImage}
                  className="card-img-top"
                  alt="tutor-image"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* Render TutorList component with tutors array */}
      <div className="row mt-4">
        <div className="col-md-12">
          <TutorList tutors={tutors} />
        </div>
      </div>
    </div>
  );
}
