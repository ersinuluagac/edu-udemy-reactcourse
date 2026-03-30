import { useState } from "react";
import "./App.css";
import "./css/Course.css"
import Header from "./Header";
import { courses } from "./Data";
import Course from "./Course";

function App() {
  return (
    <div>
      <Header />
      <div className="course-main">
        {courses?.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default App;
