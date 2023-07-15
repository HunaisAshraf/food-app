import React from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileCalss";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("parent-didmount");

    this.timer = setInterval(() => {
      console.log("calssTimer");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("parent-didupdate");
  }

  componentWillUnmount() {
    console.log("parent-umnount");
    clearInterval(this.timer);
  }
  render() {
    return (
      <>
        <h1>About</h1>

        <ProfileClass mes={"props from parent"} />
      </>
    );
  }
}

export default AboutClass;
