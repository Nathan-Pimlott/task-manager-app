import React from "react";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="headerContainer">
      <h1>My lists</h1>
      <div className="navigationContainer">
        <button
          className="containedButton"
          onClick={() => window.location.reload()}
        >
          Refresh
        </button>
        <button className="containedButton" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="containedButton" onClick={() => navigate("/to-do")}>
          To Do
        </button>
        <button className="containedButton" onClick={() => navigate("/done")}>
          Done
        </button>
      </div>
    </div>
  );
};
