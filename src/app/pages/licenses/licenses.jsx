import React, { Component } from "react";
import { Typography } from "@material-ui/core";
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
      <div className={this.props.classNames}>
        <Typography variant="h2">Hello {this.state.name}</Typography>
      </div>
    );
  }
}

export default licenses;
