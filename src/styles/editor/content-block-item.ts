import { makeStyles } from "@material-ui/core";

export const useContentBlockItemStyles = makeStyles(theme => ({

  card: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.background.default
  },

  cardHeader: {
    marginTop: -11,
    width: 300
  },

  input: {
    marginBottom: theme.spacing(2)
  },

  inlineInput: {
    "&:not(:first-child)": {
      marginLeft: theme.spacing(1)
    }
  },

  quizSwitch: {
    marginBottom: theme.spacing(2)
  }

}), {
  name: "content-block-item"
});