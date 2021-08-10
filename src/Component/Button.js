import react from "react";
import { Route } from "react-router-dom";

const Button = () => (
  <Route
    render={({ history }) => (
      <button
        type="button"
        onClick={() => {
          history.push("/loginform2/src/component/button");
        }}
      >
        Click Me!
      </button>
    )}
  />
);

export default Button;
