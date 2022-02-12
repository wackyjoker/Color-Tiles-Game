import React from 'react'
import styles from './hardMode.module.css'
import maintenance from '../../images/maintain.png'
const MineSweeper: React.FC = () => {
    return (
        <div>
            <img
                src={maintenance}
                alt="maintenance"
                className={styles.maintenance__img}
            />
        </div>
    )
}

export default MineSweeper
