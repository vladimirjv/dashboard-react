import React, { Component } from "react";

class ComponentWraper extends Component {
  render() {
    return <div className={this.props.className}>{this.props.children}</div>;
  }
}

export default ComponentWraper;
