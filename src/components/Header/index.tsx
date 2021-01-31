import React, { useState, useEffect } from "react";
import "./header.css";
import { icons } from "./iconData";
import { AiOutlineMenuFold } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Header: React.FC = () => {
  const [toggle, setToggle] = useState<Boolean>(false);
  const fold = () => setToggle((prevState) => !prevState);
  useEffect(() => {
    if (window.matchMedia("(max-width: 500px)").matches) fold();
  }, []);

  return (
    <>
      <header className={toggle ? "header active" : "header"} role="banner">
        <nav role="navigation" className="nav">
          <div className={toggle ? "title__bar active" : "title__bar"}>
            <h2>Menu</h2>
            <AiOutlineMenuFold
              className={toggle ? "title__icon active" : "title__icon"}
              onClick={fold}
              role="presentation"
              aria-label="fold"
            />
          </div>
          <ul role="list" aria-labelledby="navigation">
            {icons.map((items, key) => {
              return (
                <li role="listitem" className="list-item__container" key={key}>
                  <NavLink to={items.path} className="list-item__link" activeClassName="list-item__link--selected">
                    <div role="listitem">
                      {items.icon}
                      <span>{items.title}</span>
                    </div>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
