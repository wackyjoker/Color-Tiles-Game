import React from "react";
import styles from './HardMode.module.css';
import maintenance from "../../images/maintain.png";
const MineSweeper: React.FC = () => {
  return (
    <div>
      <img src={maintenance} alt="maintainance" className={styles.maintenanceImg} />
    </div>
  );
};

export default MineSweeper;
