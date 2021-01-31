import React from "react";
import "./hardmode.css";
import maintainance from "../../images/maintain.png";
const MineSweeper: React.FC = () => {
  return (
    <div>
      <img src={maintainance} alt="maintainance" className="maintainance-img" />
    </div>
  );
};

export default MineSweeper;
