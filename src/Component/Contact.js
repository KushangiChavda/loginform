import React from "react";
import { Route } from "react-router-dom";

function Contact() {
  return (
    <form>
      <h1>Login Form</h1>
      <label>
        Email ID:
        <input type="text" />
      </label>
      <br></br>
      <label>
        password:
        <input type="text" />
      </label>
      <br></br>
      <input type="submit" value="Submit" />
      <br></br>
      <input type="submit" value="forget password" />
      <button>submit</button>
    </form>
  );
}

export default Contact;
