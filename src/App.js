import React from "react";

function App() {
  const people = [
    {
      id: 1,
      lastName: "House",
      phone: "938-838-3838",
      dob: "1/1/1978",
      medicalNumber: "1",
      zip: 45434
    },
    {
      id: 2,
      lastName: "Nelson",
      phone: "373-837-3838",
      dob: "3/1/1988",
      medicalNumber: "2",
      zip: 82833
    }
  ];
  return <h1>People</h1>;
}

export default App;
