import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import RouteWithSubRoutes from "../components/RouteWithSubRoutes";
import ListMenuSideBar from "../components/ListMenuSideBar";

const drawerWidth = 200;
const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    [theme.breakpoints.up('md')]:{
      width:drawerWidth
    },
    [theme.breakpoints.down('md')]:{
      width:0
    },
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar,
  active:{
    color:theme.primary
  }
});

class ClippedDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clipped:true
    };
    // const { classes,width } = this.props;
    this.Clipped=this.Clipped.bind(this);
  };
  Clipped(){
    // console.log(typeof this.props.width)
    if (this.props.width!=='lg') {
      return false
    } else {
      return true
    }
  }
  componentDidMount(){
  }
  componentWillUnmount(){
    console.log(this.props)
  }
  
  render(){
    return (
      <div className={this.props.classes.root}>
        <CssBaseline />
        <AppBar 
          position="fixed" 
          className={this.props.classes.appBar}
        >
          <Toolbar>
            <Hidden lgUp>
              <IconButton color="inherit">
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography variant="h6" color="inherit" noWrap>
              Clipped drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={this.props.classes.drawer}
          variant="persistent"
          open={this.Clipped()}
        >
          <div className={this.props.classes.toolbar} />
          <List>
            {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem component={Link} to={`/app/${text}`} button key={text}  >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))} */}
            <ListMenuSideBar/>
          </List>
        </Drawer>
        <main className={this.props.classes.content}>
          <div className={this.props.classes.toolbar} />
          <Typography variant="h5">
              {`my actual width ${this.Clipped()}`}
          </Typography>
          
          {this.props.routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}

        </main>
      </div>
    );
  }
  
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withWidth()(withStyles(styles)(ClippedDrawer));
