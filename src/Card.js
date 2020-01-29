import React, { useState } from "react";
import styles from "./Card.module.scss";
import { savePerson } from "./api/personApi";

const emptyPerson = {
  lastName: "",
  phone: "",
  dob: "",
  medicalNumber: "",
  zip: ""
};

// Object destructuring
function Card(props) {
  const [isEditable, setIsEditable] = useState(false);
  const [person, setPerson] = useState(emptyPerson);

  function handleEditClick() {
    // using a callback function so I can reliably reference the current state

    // If user is editing, the cancel button will be displayed
    if (isEditable) {
      // goal: reset the person in state when cancel is clicked.
      setPerson(emptyPerson);
    }
    setIsEditable(currentIsEditable => !currentIsEditable);
  }

  function handleChange(event) {
    // using spread syntax to copy person, and set lastName to value
    setPerson({ ...person, lastName: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function renderForm() {
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          onChange={handleChange}
          value={person.lastName}
        />
        <input type="submit" value="Save" aria-label={`Save Id ${person.id}`} />
      </form>
    );
  }

  return (
    <div className={styles.root}>
      <button
        onClick={handleEditClick}
        aria-label={
          isEditable
            ? `Cancel editing Id ${props.person.id}`
            : `Edit ${props.person.lastName} with Id ${props.person.id}`
        }
      >
        {isEditable ? "Cancel" : "Edit"}
      </button>
      {isEditable ? (
        renderForm()
      ) : (
        <>
          <h2 className={styles.header}>{props.person.lastName}</h2>
          Phone: {props.person.phone}
          <br />
          Zip: {props.person.zip}
        </>
      )}
    </div>
  );
}

// Default export = Person importing can choose the identifier.
export default Card;
