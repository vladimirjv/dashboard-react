// ? Import React
import React, { Component } from "react";
// ? Import MaterialUI Components
import { Avatar, Grid, Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
//? Imports Styles
import { styles } from "./chat.styles";
import "./chat.scss";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={this.props.classNames}>
        <div className="message">
          <Grid container wrap="nowrap" spacing={16}>
            <Grid item>
              <Avatar
                alt="sender"
                src="https://s3.amazonaws.com/uifaces/faces/twitter/h1brd/128.jpg"
                className={this.props.classes.avatar}
              />
            </Grid>
            <Grid item xs>
              <Typography>
                Dicta maxime error nostrum pariatur earum quasi fugiat doloribus
                minus.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Chat);
