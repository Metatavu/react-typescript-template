import { makeStyles } from "@material-ui/core";

export const useCreateLanguageModalStyles = makeStyles(theme => ({

  root: {
    width: 400,
    height: 200,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1)
  }

}), {
  name: "create-language-modal"
});