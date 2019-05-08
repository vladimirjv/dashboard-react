import { DRAWER_WIDTH } from "../../utils/map.js";
export const styles = theme => ({
  map: {
    [theme.breakpoints.up("md")]: {
      left: DRAWER_WIDTH
    },
    position: "absolute",
    top: 0 + 64,
    bottom: 0,
    right: 0,
    left: 0
  },
  content: {
    position: "relative",
    flexGrow: 1
  }
});
