import React from "react";
import {
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import DatabaseGraph from "./DatabaseGraph";

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

  const articleLinks = [
    "https://www.markiza.sk/soubiz/zahranicny/1891508_dalsieho-znameho-rezisera-obvinuje-z-obtazovania-38-zien",
    "https://dennikn.sk/1364391/preco-obete-sexualneho-zneuzivania-hovoria-az-po-rokoch-su-ich-vypovede-doveryhodne-vysvetluje-psychologicka/",
    "https://www.topky.sk/cl/100370/1768819/Dalsi-sexualny-skandal-v-slovenskej-cirkvi--Spoved-z-detstva-o-sexualnom-obtazovani",
    "https://www.zenyvmeste.sk/mala-som-zakrocit-proti-kolegovi--co-obtazuje",
    "https://www.topky.sk/cl/11/1776147/Sexualny-skandal-v-Polsku--VIDEO-Znamy-onkolog-mal-obtazovat-pacientky--az-88-obeti"
  ];

  return (
    <Grid>
      <DatabaseGraph />
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
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ArticleIcon />
                  </ListItemIcon>
                  <ListItemText primary={articleLinks[0]} />
                </ListItemButton>
              </ListItem>
            </List>
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
