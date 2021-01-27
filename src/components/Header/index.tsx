import React, { useState, useEffect } from "react";
import "./header.css";
import { icons } from "./iconData";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  const [toggle, setToggle] = useState<Boolean>(false);
  const fold = () => setToggle((prevState) => !prevState);
  console.log(toggle);
  return (
    <>
      <span className={toggle ? "toggle__icon active" : "toggle__icon disabled"} onClick={fold}>
        <AiOutlineMenuUnfold />
      </span>
      <header className={toggle ? "header active" : "header"} role="banner">
        <nav role="navigation" className="nav">
          <div className="toggle__bar" role="button">
            <h2>Menu</h2>
            <AiOutlineMenuFold className="toggle__icon" onClick={fold} />
          </div>
          <ul>
            {icons.map((items, key) => {
              return (
                <Link to={items.path} key={key}>
                  <div>
                    <li role="link">
                      {items.icon}
                      <span>{items.title}</span>
                    </li>
                  </div>
                </Link>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
