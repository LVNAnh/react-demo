import React from "react";
import PropTypes from "prop-types";

LoginForm.propTypes = {};

function LoginForm(props) {
  return (
    <form>
      <div>
        <div>
          <label>User name</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Pass Word</label>
          <input type="password" />
        </div>
        <div>
          <button onClick={props.hi}>Login</button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
