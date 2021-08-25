import { Box } from "@material-ui/core";
import React from "react";
import useAppLayoutStyles from "../../styles/layouts/app-layout";
/**
 * Component properties
 */
interface Props {
}

/**
 * App layout component
 *
 * @param props component properties
 */
const AppLayout: React.FC<Props> = ({ children }) => {
  const classes = useAppLayoutStyles();

  return (
    <Box className={ classes.root }>
      <Box className={ classes.content }>
        { children }
      </Box>
    </Box>
  );
};

export default AppLayout;