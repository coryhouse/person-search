// This file makes HTTP calls to the person API.
import axios from "axios";

export async function getPeople() {
  return axios.get("http://localhost:3001/person");
}

export async function getPeopleByLastName(lastName) {
  return axios.get("http://localhost:3001/person?q=" + lastName);
}

export async function savePerson(person) {
  return axios.put("http://localhost:3001/person/" + person.id);
}
