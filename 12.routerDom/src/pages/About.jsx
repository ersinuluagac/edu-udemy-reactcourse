import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About</h1>
      <hr />
      <Link to="employee">Çalışanlar</Link>
      <Link to="company">Şirket</Link>
      <Outlet />
    </div>
  );
}

export default About;
