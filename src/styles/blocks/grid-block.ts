import { makeStyles } from "@material-ui/core";

export const useGridBlockStyles = makeStyles(theme => ({

  root: {
    paddingTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing(6)
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10)
    }
  },

  content: {
    maxWidth: 1600,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    width: "100%",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      alignItems: "flex-start",
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
      paddingRight: theme.spacing(16)
    },
    [theme.breakpoints.up("xl")]: {
      paddingLeft: 0,
      paddingRight: 0
    }
  },

  automaticGrid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start"
    }
  },

  gridItem: {
    maxWidth: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      maxWidth: 200,
      width: 200
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(2),
      marginRight: theme.spacing(2)
    }
  },

  gridItemImage: {
    width: 150,
    height: 150,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "50%",
    marginBottom: theme.spacing(2)
  },

  textContent: {
    flex: 1,
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      alignSelf: "flex-start"
    }
  },

  titleContainer: {
    textAlign: "center"
  }

}), {
  name: "grid-block"
});