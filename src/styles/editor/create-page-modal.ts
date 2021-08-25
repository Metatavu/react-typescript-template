import { makeStyles } from "@material-ui/core";

export const useCreatePageModalStyles = makeStyles(theme => ({

  root: {
    width: 600,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1)
  },

  dialogContent: {
    "& > :not(:first-child)": {
      marginTop: theme.spacing(3)
    }
  }

}), {
  name: "create-page-modal"
});