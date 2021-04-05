import React from "react";
import styles from './HardMode.module.css';
import maintenance from "../../images/maintain.png";
const MineSweeper: React.FC = () => {
    console.log('here come styles');
    console.log(styles.maintenance__img);
  return (
    <div>
      <img src={maintenance} alt="maintenance" className={styles.maintenance__img} />
    </div>
  );
};

export default MineSweeper;
