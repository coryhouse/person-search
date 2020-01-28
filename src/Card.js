import React from "react";
import styles from "./Card.module.scss";

function Card(props) {
  return (
    <div className={styles.root}>
      <h2 className={styles.header}>{props.person.lastName}</h2>
      Phone: {props.person.phone}
      <br />
      Zip: {props.person.zip}
    </div>
  );
}

export default Card;
