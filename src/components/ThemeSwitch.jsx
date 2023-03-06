import React from "react";

export default function ThemeSwitch() {
  function handleClick(e) {
    e.currentTarget.classList.toggle("light");
    document.body.classList.toggle("light");
  }

  return (
    <button className="theme-btn" onClick={handleClick}>
      <i className="fa-solid fa-circle theme-btn-circle"></i>
      <i className="fa-solid fa-moon"></i>
      <i className="fa-solid fa-sun"></i>
    </button>
  );
}
