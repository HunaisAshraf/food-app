import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("child mount");
  }

  componentDidUpdate() {
    console.log("child update");
  }

  componentWillUnmount() {
    console.log("child unmount");
  }
  render() {
    return (
      <>
        <h1>Profile class</h1>
        <p>{this.props.mes}</p>
        <h4>{this.state.count}</h4>
        <button
          onClick={() =>
            this.setState({
              count: 1,
            })
          }
        >
          click
        </button>
      </>
    );
  }
}

export default ProfileClass;
