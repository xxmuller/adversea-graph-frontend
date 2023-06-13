import React from "react";
import {
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@mui/material";

export default function ResultGraph() {
  const [openEntityPopup, setOpenEntityPopup] = React.useState(false);
  const [openLinePopup, setOpenLinePopup] = React.useState(false);

  const setEntityPopupOpen = () => {
    setOpenEntityPopup(true);
  };

  const handleEntityPopupClose = () => {
    setOpenEntityPopup(false);
  };

  const setLinePopupOpen = () => {
    setOpenLinePopup(true);
  };

  const handleLinePopupClose = () => {
    setOpenLinePopup(false);
  };

  return (
    <Grid>
      <Button
        color="secondary"
        variant="text"
        size="small"
        style={{ textDecoration: "underline" }}
        onClick={setEntityPopupOpen}
      >
        Entity Popup
      </Button>

      <Button
        color="secondary"
        variant="text"
        size="small"
        style={{ textDecoration: "underline" }}
        onClick={setLinePopupOpen}
      >
        Line Popup
      </Button>

      <Dialog
        open={openEntityPopup}
        onClose={handleEntityPopupClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Toto je Entity Popup
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tu su nejake clanky o danej entite
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEntityPopupClose}>Späť</Button>
          <Button onClick={handleEntityPopupClose} autoFocus>
            Všetky články
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openLinePopup}
        onClose={handleLinePopupClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Toto je Line Popup
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tu su nejake clanky o danom vztahu
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLinePopupClose}>Späť</Button>
          <Button onClick={handleLinePopupClose} autoFocus>
            Všetky články
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}
