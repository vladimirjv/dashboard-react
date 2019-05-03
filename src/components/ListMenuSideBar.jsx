import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { 
  Dashboard,
  Map,
  DirectionsCar
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import Items from "../utils/itemsNavbar";

class SideBarMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.getIcon=this.getIcon.bind(this)
  };
  /**
   * getIcon
   * @param {string} type type for check
   */
  getIcon(type){
    switch (type) {
      case 'dashboard':
        return <Dashboard/>
      case 'map':
        return <Map/>
      case 'directionsCar':
        return <DirectionsCar/>
      default:
        break;
    }
  }
  render() {
    return(
      <List>
        {Items.map((el,i)=>(
          <ListItem
            component={Link}
            to={el.path}
            button
            key={el.name}
          >
            <ListItemIcon>
              {this.getIcon(el.icon)}
            </ListItemIcon>
            <ListItemText primary={el.name} />
          </ListItem>
        ))}
      </List>
    )
  }
}

export default SideBarMenu;
