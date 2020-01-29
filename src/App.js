import React, { useState, useEffect } from "react";
import Card from "./Card";
import { getPeople, getPeopleByLastName } from "./api/personApi";

function App() {
  // Declare state to store searchTerm, with setter called setSearchTerm
  // Default to an empty string.
  const [searchTerm, setSearchTerm] = useState("");
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPeople().then(peopleResponse => {
      setPeople(peopleResponse.data);
    });
    //Dependency array. Tells useEffect when to re-run.
    //Says what state this effect should sync with.
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    getPeopleByLastName(searchTerm).then(peopleResponse => {
      setPeople(peopleResponse.data);
    });
  }

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <>
      <h1>People</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search by Last Name:</label>{" "}
        <input
          id="search"
          type="text"
          onChange={handleChange}
          value={searchTerm}
        />
        <input type="submit" value="Search" />
      </form>
      {people.map(person => (
        <Card key={person.id} person={person} />
      ))}
    </>
  );
}

export default App;
