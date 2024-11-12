import React from "react";

function Menu({ setShowMusicos }) {
  const handleToggle = (type) => {
    // define estado para "musicos", "instrumentos", "home"
    setShowMusicos(type);
  };

  const handleSairClick = () => {
    // redireciona o "sair" para o google
    window.location.href = "https://www.google.com";
  };

  return (
    <nav>
      <a href="#" onClick={() => handleToggle("home")}>Home</a>
      <a href="#" onClick={() => handleToggle("musicos")}>Musicos</a>
      <a href="#" onClick={() => handleToggle("instrumentos")}>Instrumentos</a>
      <a href="#" onClick={handleSairClick}>Sair</a>
    </nav>
  );
}

export default Menu;
