import { makeStyles } from "@material-ui/core";

export const useQuizBlockStyles = makeStyles(theme => ({

  root: {
    minWidth: "100%",
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
      marginRight: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(8),
      marginRight: theme.spacing(8),
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
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

  mediaRightContent: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row"
    }
  },

  textContent: {
    flex: 2,
    marginBottom: theme.spacing(4),
    alignSelf: "flex-start",
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(6),
      marginBottom: 0
    }
  },

  imageBox: {
    backgroundSize:"cover",
    backgroundPosition: "center",
    [theme.breakpoints.down("md")]: {
      minHeight: 300,
    },
    [theme.breakpoints.down("lg")]: {
      minHeight: 400,
      width: "100%"
    }
  },

  quiz: {
    width: "100%",
    marginBottom: theme.spacing(6)
  },

  formControl: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },

  correct: {
    color: theme.palette.secondary.light
  },

  incorrect: {
    color: theme.palette.error.main
  }

}), {
  name: "quiz-block"
});