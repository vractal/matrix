import React from "react";

import styles from "./footer.module.css";

export const Footer = () => (
  <div
    className={`row p-5 justify-content-center align-items-center ${styles.bottomdiv}`}
  >
    <span>
      Um fork de #matrix (Resultados Digitais) desgooglezado com <span className={styles.heart}>&#9829;</span> por Fractopia.
    </span>
  </div>
);
