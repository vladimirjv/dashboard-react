//? Imports React
import React from "react";
import ReactDOM from "react-dom";
//? Imports MaterialUI
import { Button } from "@material-ui/core";

export default class ButtonsControl {
  constructor(props) {
    this.props = props;
  }

  onAdd(map) {
    this._map = map;
    this._container = document.createElement("div");
    // this._container.setAttribute("id", "buttonControll");
    this._container.className = "mapboxgl-ctrl";

    ReactDOM.render(
      <Button
        variant="contained"
        className="deep-orange darken-4 text-white"
        color="secondary"
      >
        Panic Alert
      </Button>,
      ReactDOM.findDOMNode(this._container)
    );

    this._container.onclick = () => {
      console.log("hi!");
    };
    return this._container;
  }

  onRemove() {
    this._container.parentNode.removeChild(this._container);
    this._map = undefined;
  }
}

// this._container.innerHTML = /* html */ `
//   <a class="waves-effect waves-light btn-small ${this.props.color}">
//     <i class="material-icons left">error</i>
//     Alerts
//   </a>
// `;
// this._container.innerHTML = inner;
