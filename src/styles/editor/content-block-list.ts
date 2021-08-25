import { makeStyles } from "@material-ui/core";

export const useContentBlockListStyles = makeStyles(theme => ({

  root: {
    height: "100%",
    overflowY: "auto"
  },

  card: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.background.default
  }

}), {
  name: "content-block-list"
});