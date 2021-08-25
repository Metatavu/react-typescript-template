import { makeStyles } from "@material-ui/core";

export const useHeaderStyles = makeStyles(theme => ({

  root: {
    background: "linear-gradient(rgba(255,255,255,1), rgba(255,255,255,0))",
    height: 100,
    transition: `
      height 0.5s 0.2s ease-out,
      background 0.5s 0.2s ease-out,
      box-shadow 0.5s 0.2s ease-out
    `,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8)
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.up(1600)]: {
      paddingLeft: theme.spacing(16),
      paddingRight: theme.spacing(16)
    },
    [theme.breakpoints.up("xl")]: {
      paddingLeft: theme.spacing(19),
      paddingRight: theme.spacing(19)
    },
    "&.robocoast": {
      background: "#182D5E"
    }
  },

  solidBg: {
    height: 64,
    background: "linear-gradient(rgba(255,255,255,1), rgba(255,255,255,0.9))",
    boxShadow: "0 0 30px rgba(0,0,0,0.2)",
    "&.robocoast": {
      background: "#182D5E"
    }
  },

  content: {
    width: "100%"
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    width: 225,
    transition: "width 0.2s ease-out",
    [theme.breakpoints.up("xl")]: {
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

  logoWhite: {
    display: "flex",
    width: "80%",
    "& svg": {
      width: "100%"
    }
  },

  nav: {
    display: "flex",
    alignItems: "center",
    "& a": {
      marginLeft: theme.spacing(2)
    }
  },

  button: {
    marginLeft: theme.spacing(2),
    "&.robocoast": {
      color: "#fff",
      borderColor: "#fff"
    }
  },

  navButton: {
    borderBottom: "4px solid rgba(255,255,255,0)",
    transition: "border-bottom-color 0.2s ease-out",
    "&.selected": {
      borderBottomColor: theme.palette.secondary.main
    },
    "&.robocoast": {
      color: "#fff"
    }
  },

  languageSelect: {
    "& .MuiInputBase-root": {
      fontSize: 14
    },
    "& .MuiSelect-selectMenu": {
      textTransform: "uppercase"
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: 0
    }
  }

}), {
  name: "desktop-header"
});