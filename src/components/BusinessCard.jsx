import React from "react";
import Info from "./Info";
import About from "./About";
import Interest from "./Interests";
import Footer from "./Footer";

export default function BusinessCard() {
  return (
    <div className="card">
      <Info />
      <div className="card-body">
        <About />
        <Interest />
      </div>
      <Footer/>
    </div>
  );
}
