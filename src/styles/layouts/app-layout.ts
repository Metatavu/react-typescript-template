import { makeStyles } from "@material-ui/core";

const useAppLayoutStyles = makeStyles(theme => ({

  root: {
    backgroundColor: theme.palette.background.default
  },

  content: {
    backgroundColor: "rgba(218,219,205,0.1)",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: "100%",
    minHeight: `calc(100vh - ${theme.spacing(64)}px)`
  }

}), {
  name: "app-layout"
});

export default useAppLayoutStyles;