import { makeStyles } from "@material-ui/core";

export const useQuizOptionsListStyles = makeStyles(theme => ({

  root: {
    padding: `${theme.spacing(2)}px 0`
  },

  header: {
    display: "flex",
    justifyContent: "space-between"
  },

  list: {
    padding: theme.spacing(2)
  },

  option: {
    width: "100%",
    display: "flex",
    marginTop: theme.spacing(2)
  }

}), {
  name: "quiz-options-list"
});