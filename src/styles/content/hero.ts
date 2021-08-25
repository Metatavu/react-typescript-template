import { makeStyles } from "@material-ui/core";

const barHeight = 4;

export const useHeroStyles = makeStyles(theme => ({

  root: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    overflow: "hidden",
    maxWidth: "100%",
    position: "relative",
    justifyContent: "flex-end",
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(14)
    },
    [theme.breakpoints.up(1024)]: {
      paddingTop: theme.spacing(14),
      paddingBottom: 0,
      height: 600
    },
    "&:after": {
      content: "''",
      height: barHeight,
      background: theme.palette.secondary.main,
      [theme.breakpoints.up("sm")]: {
        background: `linear-gradient(to left, ${theme.palette.secondary.main}, rgba(255,255,255,0) 70%)`
      },
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 2
    },
    [theme.breakpoints.up("md")]: {
      "&:before": {
        content: "''",
        height: "25%",
        background: `linear-gradient(rgba(255,255,255,0), ${theme.palette.background.default})`,
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        [theme.breakpoints.up("lg")]: {
          height: "50%"
        }
      }
    }
  },

  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up(1024)]: {
      position: "absolute",
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
      marginLeft: theme.spacing(4)
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(8)
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: theme.spacing(16),
      marginRight: theme.spacing(16)
    }
  },

  alignmentWrapper: {
    position: "relative",
    maxWidth: 1600,
    width: "100%",
    height: "100%"
  },

  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.up(1024)]: {
      top: 0,
      bottom: 0,
      zIndex: 2,
      position: "absolute",
      left: 0,
      width: "80%",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    [theme.breakpoints.up("md")]: {
      width: "75%",
      paddingLeft: 0,
      paddingRight: 0
    },
    [theme.breakpoints.up("lg")]: {
      width: "60%"
    },
    [theme.breakpoints.up("xl")]: {
      width: "55%"
    }
  },

  imageBackground: {
    opacity: 0.8,
    position: "relative",
    display: "flex",
    flex: 1,
    height: "100%",
    maxWidth: "100%",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.up("lg")]: {
      maxWidth: "50%"
    },
    "&:before": {
      content: "''",
      background: "linear-gradient(rgba(255,255,255,1), rgba(255,255,255,0))",
      position: "absolute",
      width: "100%",
      height: "70%",
      top: -1,
      [theme.breakpoints.up("xl")]: {
        height: "50%"
      }
    },
    "&:after": {
      content: "''",
      background: "linear-gradient(to right, rgba(255,255,255,1) 15%, rgba(255,255,255,0.8))",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: -1,
      top: 0,
      bottom: 0,
      [theme.breakpoints.up("md")]: {
        background: "linear-gradient(to right, rgba(255,255,255,1) 55%, rgba(255,255,255,0.5))"
      },
      [theme.breakpoints.up("lg")]: {
        background: "linear-gradient(to right, rgba(255,255,255,1) 15%, rgba(255,255,255,0))",
        width: "60%"
      },
      [theme.breakpoints.up("xl")]: {
        background: "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))",
        width: "50%"
      }
    }
  }
}), {
  name: "hero"
});