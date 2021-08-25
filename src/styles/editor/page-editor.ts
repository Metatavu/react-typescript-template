import { makeStyles } from "@material-ui/core";

export const usePageEditorStyles = makeStyles(theme => ({

  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(218,219,205,0.2)"
  },

  editorContent: {
    padding: theme.spacing(4)
  },

  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "#f5f5f5",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
  },

  contentBlockList: {
    flex: 1,
    overflowY: "auto"
  },

  actionButton: {
    marginLeft: theme.spacing(2)
  },

  leftAligned: {
    marginRight: "auto"
  }

}), {
  name: "page-editor"
});