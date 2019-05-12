import React, { Component } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { Hidden, IconButton, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Opacity from "@material-ui/icons/Opacity";
import { connect } from "react-redux";
import { toggleTheme, setDrawerVisibility } from "../../store/actions";

const style = {
  grow: {
    flexGrow: 1
  }
};
export class ToolbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themeDark: false
    };
    this.Drawer = this.Drawer.bind(this);
    this.Theme = this.Theme.bind(this);
  }

  Drawer() {
    this.props.changeVisibility(!this.props.visibility);
  }

  Theme() {
    if (this.props.theme === "light") {
      this.props.changeTheme("dark");
    } else {
      this.props.changeTheme("light");
    }
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
        <div className={this.props.classes.grow}>
          <Typography variant="h6" color="inherit" noWrap>
            Dashboard
          </Typography>
        </div>
        <IconButton aria-haspopup="true" color="inherit" onClick={this.Theme}>
          <Opacity />
        </IconButton>
      </Toolbar>
    );
  }
}
const mapStateToProps = state => ({
  state: state,
  theme: state.Theme
});

const mapDispatchToProps = {
  changeVisibility: value => setDrawerVisibility(value),
  changeTheme: value => toggleTheme(value)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(ToolbarComponent));
