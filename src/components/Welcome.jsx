import React from "react";
import PropTypes from "prop-types";
import { render } from "@testing-library/react";
class Welcome extends React.Component {
   
    render() {
        const {user}=this.props;
      return (
        <div>
          <p>Welcome {user.id} - {user.name}!</p>
          <Logout />
        </div>
      );
    }
  }
  class Logout extends React.Component {
    render() {
      return <a href="#">Logout</a>;
    }
  }
  export default Welcome;
  