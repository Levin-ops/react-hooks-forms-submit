import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault(); // this prvents the form from makin new requests to the current page causing a refresh
    const formData = { // putting together the current form data into an object using values stored in state.
      firstName: firstName,
      lastName: lastName,
    };
    props.sendFormDataSomewhere(formData);
    setFirstName("");
    setLastName("");
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
