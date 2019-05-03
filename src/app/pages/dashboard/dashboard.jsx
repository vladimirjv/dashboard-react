import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import { styles } from "./dashboard.styles";

class Inbox extends Component{
  constructor(props) {
    super(props)
    this.state = {
       
    };
  };
  
  render(){
    return (
      <div className={this.props.classes.content}>
        <p>Hello everybody</p>
      </div>
    );
  }
}
export default withStyles(styles)(Inbox);
