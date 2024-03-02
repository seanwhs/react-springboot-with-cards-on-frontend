import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componets/Home";
import AddTutorial from "./componets/AddTutorial";
import Tutorial from "./componets/Tutorial";
import Navbar from "./componets/Navbar";
import TutorialsList from "./componets/TutorialsList";
import TutorList from "./componets/TutorList";
import AddTutor from "./componets/AddTutor";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-6 py-3 border shadow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorials-list" element={<TutorialsList />} />
          <Route path="/add" element={<AddTutorial />} />
          <Route path="/tutorials/:id" element={<Tutorial />} />
          <Route path="/tutors-list" element={<TutorList />} />
          <Route path="/add-tutor" element={<AddTutor />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}
