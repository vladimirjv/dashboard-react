import { DRAWER_WIDTH } from "../../utils/map";

export const styles = theme => ({
    root: {
      display: "flex"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
      [theme.breakpoints.up("md")]: {
        width: DRAWER_WIDTH
      },
      flexShrink: 0
    },
    drawerPaper: {
      width: DRAWER_WIDTH
    },
    toolbar: theme.mixins.toolbar,
    active: {
      color: theme.primary
    }
  });
  