import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { useSelector, useDispatch } from "react-redux";
import { errorSelector, setIsOpen } from "../../store/errorHandler/errorSlice";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ErrorHandler() {
  const dispatch = useDispatch();
  const { errorMsg, isOpen } = useSelector(errorSelector);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setIsOpen(false));
  };

  return (
    <Snackbar open={isOpen} autoHideDuration={4000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {errorMsg}
      </Alert>
    </Snackbar>
  );
}

export default ErrorHandler;
