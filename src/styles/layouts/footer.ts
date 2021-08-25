import { makeStyles } from "@material-ui/core";

export const useFooterStyles = makeStyles(theme => ({

  root: {
    display: "flex",
    flexDirection: "column",
    background: `linear-gradient(172deg,${theme.palette.primary.main} 25%, ${theme.palette.secondary.main})`,
    width: "100%",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(16)
  },

  content: {
    minHeight: theme.spacing(40),
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4)
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(8),
      marginRight: theme.spacing(8)
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: theme.spacing(16),
      marginRight: theme.spacing(16)
    }
  },

  logoContainer: {
    display: "inline-flex",
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(4),
    }
  },

  logo: {
    width: 180,
    [theme.breakpoints.up("sm")]: {
      width: 250
    },
    "& svg": {
      maxWidth: "100%"
    }
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: 0,
      marginLeft: theme.spacing(4)
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(16)
    }
  },

  navLink: {
    color: "#fff",
    "& .MuiButton-text": {
      fontSize: 16
    },
    "& .MuiButton-label": {
      justifyContent: "flex-start"
    }
  },

  contact: {
    display: "flex",
    flexDirection: "column",
    "& p": {
      marginBottom: theme.spacing(2)
    }
  },

  row: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row"
    }
  }

}), {
  name: "footer"
});