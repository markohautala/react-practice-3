import React from "react";


class NavBarSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: "Login here!",
      loginlogout: "Login"
    };
  }

  handleLoginClick = () => {
      this.setState((prevState) => ({
        message: prevState.isClicked ? "Welcome back!" : "Login here!",
        loginlogout: prevState.isClicked ? "Logout" : "Login",
        isClicked: !prevState.isClicked
      }));
      console.log("Login button clicked");
  };

  render() {
    return (
      <div>
        <h1>Logo Text</h1>
        <hr />
        <div>
          <span>{this.state.message}</span>
          <button onClick={this.handleLoginClick}>{this.state.loginlogout}</button>
        </div>
      </div>
    );
  }
}

export default NavBarSimple;