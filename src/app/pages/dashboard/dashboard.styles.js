import { ContentPage } from "../../../assets/js/styles";

export const styles = theme => ({
  content: {
    padding: theme.spacing.unit * 2,
    ...ContentPage(theme)
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});
