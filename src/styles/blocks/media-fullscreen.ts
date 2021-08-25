import { makeStyles } from "@material-ui/core";

export const useMediaFullscreenStyles = makeStyles(theme => ({

  root: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10)
    }
  },

  imageContainer: {
    overflow: "hidden",
    width: "100%",
    "& img": {
      maxWidth: "100%"
    }
  },

  iframe: {
    width: "100%",
    height: 600
  },

}), {
  name: "media-fullscreen"
});