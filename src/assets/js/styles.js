export const DRAWER_WIDTH = 180;
export const ContentPage = theme => ({
  flexGrow: 1,
  [theme.breakpoints.up("md")]: {
    left: DRAWER_WIDTH
  },
  position: "absolute",
  top: 0 + 64,
  bottom: 0,
  right: 0,
  left: 0
});
