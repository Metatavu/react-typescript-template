import { makeStyles, Theme } from "@material-ui/core";

const uploaderHeight = 200;

/**
 * Style properties
 */
interface Props {
  imageUrl?: string;
}

export const useImageSelectionStyles = makeStyles<Theme, Props>(theme => ({

  loaderContainer: {
    width: "100%",
    height: uploaderHeight,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  dropzone: {
    flex: 1,
    minHeight: uploaderHeight,
    display: "flex",
    borderWidth: 2,
    backgroundColor: "#edf5fa",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiDropzoneArea-text": {
      fontSize: 16,
      margin: theme.spacing(2)
    },
    "& .MuiDropzoneArea-icon": {
      display: "none"
    }
  },

  ".MuiDropzoneArea-root": {
    minHeight: uploaderHeight,
  },

  previewImageContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },

  previewImage: {
    maxWidth: "100%",
    objectFit: "contain"
  },

  previewWrapper: {
    flex: 1,
    position: "relative"
  },

  removeImageButtonContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    backgroundColor: "rgba(255,255,255,0.8)",
    transition: "opacity 0.2s ease-out",
    "&:hover": {
      opacity: 1
    }
  },

  selectImageButton: {
    position: "absolute",
    top: 0,
    zIndex: 1
  },

  selectImageDialog: {
    height: 500
  },

  dialogContent: {
    display: "flex",
    width: "100%",
    height: "100%"
  },

  uploadedImageList: {
    flex: 1,
    height: "100%",
    overflowY: "auto"
  },

  selectedImageWrapper: {
    flex: 1,
    display: "flex",
    alignItems: "center"
  },

  selectedImage: ({ imageUrl }) => ({
    width: "100%",
    height: "100%",
    backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  })

}), {
  name: "image-selection"
});