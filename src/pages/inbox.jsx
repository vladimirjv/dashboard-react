import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  }
});

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
