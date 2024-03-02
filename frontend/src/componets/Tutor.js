// Tutor.js
import React from "react";

const Tutor = ({ tutor }) => {
  return (
    <div>
      <h2>{tutor.firstName} {tutor.lastName}</h2>
      <p>Credential: {tutor.credential}</p>
    </div>
  );
};

export default Tutor;
