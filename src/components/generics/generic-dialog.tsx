import * as React from "react";

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

/**
 * Interface representing component properties
 */
interface Props {
  title: string;
  positiveButtonText?: string;
  cancelButtonText?: string;
  onClose: () => void;
  onCancel: () => void;
  onConfirm: () => void | Promise<void>;
  open: boolean;
  error: boolean;
  fullScreen?: boolean;
  fullWidth?: boolean;
  disableEnforceFocus?: boolean;
  disabled?: boolean;
  ignoreOutsideClicks?: boolean;
}

/**
 * React component displaying confirm dialogs
 */
const GenericDialog: React.FC<Props> = ({
  open,
  positiveButtonText,
  cancelButtonText,
  onClose,
  onCancel,
  title,
  onConfirm,
  error,
  fullScreen,
  fullWidth,
  disableEnforceFocus,
  disabled,
  ignoreOutsideClicks,
  children
}) => {
  /**
   * Event handler for on close click
   *
   * @param reason reason why dialog was closed
   */
  const onCloseClick = (reason: string) => {
    if (ignoreOutsideClicks && (reason === "backdropClick" || reason === "escapeKeyDown")) {
      return;
    }

    onClose();
  };
  /**
   * Component render
   */
  return (
    <Dialog
      disableEnforceFocus={ disableEnforceFocus }
      open={ open }
      onClose={ (event, reason) => onCloseClick(reason) }
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullScreen={ fullScreen }
      fullWidth={ fullWidth }
    >
      <DialogTitle
        disableTypography
        id="alert-dialog-title"
      >
        { title }
        <IconButton
          size="small"
          onClick={ onCancel }
        >
          <CloseIcon/>
        </IconButton>
      </DialogTitle>
      <DialogContent>
        { children }
      </DialogContent>
      <DialogActions>
        { cancelButtonText &&
          <Button
            onClick={ onCancel }
            color="secondary"
          >
            { cancelButtonText }
          </Button>
        }
        { positiveButtonText &&
        <Button
          disabled={ error || disabled }
          onClick={ onConfirm }
          color="primary"
          autoFocus
        >
          { positiveButtonText }
        </Button>
        }
      </DialogActions>
    </Dialog>
  );
};

export default GenericDialog;