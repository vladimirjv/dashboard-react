import React, { Component } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { Hidden, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";
import { setDrawerVisibility } from "../../store/actions";

export class ToolbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.Drawer = this.Drawer.bind(this);
  }

  Drawer() {
    this.props.changeVisibility(!this.props.visibility);
  }

  componentDidMount() {}

  render() {
    return (
      <Toolbar>
        <Hidden mdUp>
          <IconButton color="inherit" onClick={this.Drawer}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Typography variant="h6" color="inherit" noWrap>
          Dashboard
        </Typography>
      </Toolbar>
    );
  }
}
const mapStateToProps = state => ({
  visibility: state.visibility
});

const mapDispatchToProps = {
  changeVisibility: value => setDrawerVisibility(value)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolbarComponent);
