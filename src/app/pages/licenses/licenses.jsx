import React, { Component } from "react";
import "./licenses.css";
import { nameRef } from "../../../firebase.config";

export class licenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Loma"
    };
  }
  componentDidMount() {
    nameRef.set("Vladimir");
    nameRef.on("value", snapshot => {
      this.setState({
        name: snapshot.val()
      });
    });
  }

  render() {
    return (
      <div className="content">
        <h2> hello {this.state.name}</h2>
      </div>
    );
  }
}

export default licenses;
