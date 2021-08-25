import { makeStyles } from "@material-ui/core";

export const useAdvancedListItemStyles = makeStyles(theme => ({

  listItem: {
    width: "100%"
  },

  selected: {
    backgroundColor: "rgba(0,0,0,0.1)"
  },

  accordionChild: {
    width: "100%"
  },

  childOffset: {
    marginLeft: theme.spacing(2)
  }

}), {
  name: "advanced-list-item"
});