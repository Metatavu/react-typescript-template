import { makeStyles } from "@material-ui/core";

export const usePageListHeaderStyles = makeStyles(theme => ({

  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 2),
    ...theme.mixins.toolbar,
    justifyContent: "space-between"
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    width: 100
  },

  logo: {
    display: "flex",
    width: "100%",
    "& svg": {
      width: "100%"
    }
  }

}), {
  name: "page-list-header"
});