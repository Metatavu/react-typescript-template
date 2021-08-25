import React from "react";
import AppLayout from "components/layouts/app-layout";
import { Typography } from "@material-ui/core";
import strings from "localization/strings";

/**
 * Main screen component
 */
const MainScreen: React.FC = () => {
  return (
    <AppLayout>
      <Typography>{ strings.generic.notImplemented }</Typography>
    </AppLayout>
  );
};

export default MainScreen;