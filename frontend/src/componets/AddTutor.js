// AddTutor.js
import React, { useState } from "react";
import TutorDataService from "../services/tutor-service";

export default function AddTutor() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [credential, setCredential] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const onChangeCredential = (e) => {
    setCredential(e.target.value);
  };

  const saveTutor = () => {
    var data = {
      firstName: firstName,
      lastName: lastName,
      credential: credential
    };

    TutorDataService.create(data)
      .then(response => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTutor = () => {
    setFirstName("");
    setLastName("");
    setCredential("");
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutor}>
            Add Another
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              required
              value={firstName}
              onChange={onChangeFirstName}
              name="firstName"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              required
              value={lastName}
              onChange={onChangeLastName}
              name="lastName"
            />
          </div>

          <div className="form-group">
            <label htmlFor="credential">Credential</label>
            <input
              type="text"
              className="form-control"
              id="credential"
              required
              value={credential}
              onChange={onChangeCredential}
              name="credential"
            />
          </div>

          <button onClick={saveTutor} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
