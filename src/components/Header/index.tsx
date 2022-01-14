import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import styles from './header.module.css'
import { icons } from './iconData'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
const Header: React.FC = () => {
  const [toggled, setToggled] = useState<Boolean>(false)
  const fold = () => setToggled((prevState) => !prevState)
  console.log(styles.header);
  useEffect(() => {
    if (window.matchMedia('(max-width: 500px)').matches) fold()
  }, [])

  return (
    <>
      <header className={cn(styles.header,{[styles.active] : toggled}) } role="banner">
        <nav role="navigation" className={styles.nav}>
          <div className={cn(styles['title__bar'],{[styles.active]:toggled})}>
            <h2>Menu</h2>
            <AiOutlineMenuFold
              className={cn(styles['title__icon'],{ [styles.active] : toggled})}
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
                    className={({isActive})=>cn(styles["list-item__link"],{[styles["list-item__link--selected"]]:isActive})}
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
