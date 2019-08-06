import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Dashboard, Map, DirectionsCar, Chat } from "@material-ui/icons";
import { Link } from "react-router-dom";

const ItemsSideBar = [
  {
    name: "Dashboard",
    icon: <Dashboard />,
    path: "/app/dashboard"
  },
  {
    name: "Map",
    icon: <Map />,
    path: "/app/map"
  },
  {
    name: "Placas",
    icon: <DirectionsCar />,
    path: "/app/placas"
  },
  {
    name: "Chat",
    icon: <Chat />,
    path: "/app/chat"
  }
];

class SideBarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <List>
        {ItemsSideBar.map((el, i) => (
          <ListItem component={Link} to={el.path} button key={el.name}>
            <ListItemIcon>{el.icon}</ListItemIcon>
            <ListItemText primary={el.name} />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default SideBarMenu;
