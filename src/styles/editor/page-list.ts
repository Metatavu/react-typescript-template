import { makeStyles } from "@material-ui/core";

export const usePageListStyles = makeStyles(theme => ({

  root: {
    position: "relative",
    height: "100%",
    overflowY: "auto"
  },

  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 2),
    ...theme.mixins.toolbar,
    justifyContent: "space-between"
  },

  noPadding: {
    padding: 0
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
  },

}), {
  name: "page-list"
});