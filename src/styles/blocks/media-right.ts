import { makeStyles } from "@material-ui/core";

export const useMediaRightStyles = makeStyles(theme => ({

  root: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    }
  },

  content: {
    maxWidth: 1600,
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: "100%",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      marginLeft: theme.spacing(6),
      marginRight: theme.spacing(6)
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(8),
      marginRight: theme.spacing(8),
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8)
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: theme.spacing(16),
      marginRight: theme.spacing(16),
      paddingLeft: theme.spacing(16),
      paddingRight: theme.spacing(16)
    },
    [theme.breakpoints.up(1600)]: {
      paddingLeft: theme.spacing(16),
      paddingRight: theme.spacing(16),
    },
    [theme.breakpoints.up("xl")]: {
      paddingLeft: 0,
      paddingRight: 0,
    }
  },

  textContent: {
    maxWidth: "100%",
    width: "100%",
    flex: 1,
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      width: "auto",
      marginRight: theme.spacing(6),
      marginBottom: 0
    }
  },

  divider: {
    backgroundColor: theme.palette.secondary.main,
    height: 0,
    width: "100%",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      height: 4,
      width: 160,
      marginBottom: 0
    }
  },

  mediaRightContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row"
    }
  },

  imageContainer: {
    flex: 2,
    overflow: "hidden",
    width: "100%",
    "& img": {
      maxWidth: "100%"
    }
  }
}), {
  name: "media-right"
});