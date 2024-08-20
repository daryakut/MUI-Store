import { Alert, Snackbar } from "@mui/material";

function Snack({ isOpen, handleClose }) {

  return (
    <Snackbar
      open={isOpen}
      onClose={handleClose}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity="success">Added item to cart</Alert>
    </Snackbar>
  );
}

export default Snack;
