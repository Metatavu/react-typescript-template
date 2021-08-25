import { makeStyles } from "@material-ui/core";

const drawerWidth = 400;

export const usePageSettingsDrawerStyles = makeStyles(theme => ({

  drawer: {
    width: drawerWidth,
    height: "100%"
  },

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.background.default
  },

  settingsToolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },

  settingsContainer: {
    padding: theme.spacing(2),
    "& > :not(:first-child)": {
      marginTop: theme.spacing(3)
    }
  }

}), {
  name: "page-settings"
});