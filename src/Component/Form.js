import React from "react";
import "../App.css";

function Form() {
  return (
    <form>
      <h1 style={{ color: "red" }}>Ragistartion Form</h1>
      <label>
        Full Name:
        <input type="text" />
      </label>

      <br></br>
      <label>
        Email ID:
        <input type="text" />
      </label>
      <br></br>
      <label>
        Country:
        <input type="text" />
      </label>
      <br></br>
      <label>
        Contact No.:
        <input type="Number" />
      </label>
      <br></br>
      <label>
        DOB:
        <input type="text" />
      </label>
      <br></br>
      <label>
        Gender:
        <input type="text" />
      </label>
      <br></br>
      <label>
        Profession:
        <input type="text" />
      </label>
      <br></br>
      <label>
        Marital Status:
        <input type="text" />
      </label>
      <br></br>
      <label>
        citizenship:
        <input type="text" />
      </label>
      <br></br>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
