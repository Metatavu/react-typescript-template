import { makeStyles } from "@material-ui/core";

export const useEditorScreenStyles = makeStyles(theme => ({

  loaderContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.palette.grey[200],
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10000
  },

}), {
  name: "editor-screen"
});