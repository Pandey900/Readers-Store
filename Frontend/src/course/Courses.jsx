import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
import Buys from "../components/Buy";
function Courses() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Course />
        <Buys />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
