import { makeStyles } from "@material-ui/core";

export const useHeaderStyles = makeStyles(theme => ({

  root: {
    background: "linear-gradient(rgba(255,255,255,1), rgba(255,255,255,0))",
    height: 80,
    transition: `
      height 0.5s 0.2s ease-out,
      background 0.5s 0.2s ease-out,
      box-shadow 0.5s 0.2s ease-out
    `,
    [theme.breakpoints.up("sm")]: {
      height: 100
    },
    "&.robocoast": {
      background: "#182D5E"
    }
  },

  solidBg: {
    height: 56,
    background: "linear-gradient(rgba(255,255,255,1), rgba(255,255,255,0.9))",
    boxShadow: "0 0 30px rgba(0,0,0,0.2)",
    "&.robocoast": {
      background: "#182D5E"
    }
  },

  content: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },

  menuToolbar: {
    height: 100,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    "&.robocoast": {
      background: "#182D5E"
    }
  },

  logoContainer: {
    marginLeft: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    width: 120,
    transition: "width 0.2s ease-out",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2),
      width: 200
    },
    [theme.breakpoints.up("md")]: {
      width: 250
    }
  },

  smallLogo: {
    width: 100
  },

  logo: {
    display: "flex",
    width: "100%",
    "& svg": {
      width: "100%"
    }
  },

  nav: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "column"
  },

  navButton: {
    width: "100%",
    justifyContent: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    fontSize: 20
  },

  button: {
    marginTop: theme.spacing(4)
  },

  menuContent: {
    paddingBottom: theme.spacing(4),
    backgroundColor: "rgba(255,255,255,0.9)"
  },

  languageSelect: {
    "& .MuiSelect-selectMenu": {
      textTransform: "uppercase"
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: 0
    }
  }

}), {
  name: "mobile-header"
});