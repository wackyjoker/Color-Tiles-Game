import React, { useState, useEffect } from 'react'
import styles from './header.module.css'
import { icons } from './iconData'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
const Header: React.FC = () => {
  const [toggle, setToggle] = useState<Boolean>(false)
  const fold = () => setToggle((prevState) => !prevState)
  useEffect(() => {
    if (window.matchMedia('(max-width: 500px)').matches) fold()
  }, [])

  return (
    <>
      <header className={toggle ? styles['header active'] : styles.header} role="banner">
        <nav role="navigation" className={styles.nav}>
          <div className={toggle ? styles['title__bar active'] : styles['title__bar']}>
            <h2>Menu</h2>
            <AiOutlineMenuFold
              className={toggle ? styles['title__icon active'] : styles['title__icon']}
              onClick={fold}
              role="presentation"
              aria-label="fold"
            />
          </div>
          <ul role="list" aria-labelledby="navigation">
            {icons.map((items, key) => {
              return (
                <li role="listitem" className={styles["list-item__container"]} key={key}>
                  <NavLink
                    to={items.path}
                    className={styles["list-item__link"]}
                    activeClassName={styles["list-item__link--selected"]}
                  >
                    <div role="listitem">
                      {items.icon}
                      <span>{items.title}</span>
                    </div>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
