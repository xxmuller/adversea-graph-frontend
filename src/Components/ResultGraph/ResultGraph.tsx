import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
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
  const searchParams = useSearchParams();
  const navigate = useNavigate();

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

  const showSearchResults = () => {
    navigate(`/results?${searchParams.toString()}`);
  };

  const showStatistics = () => {
    navigate(`/stats?${searchParams.toString()}`);
  };

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
          We found these articles about: Marián Kočner
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {/* <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ArticleIcon />
                  </ListItemIcon>
                  <ListItemText primary={articleLinks[0]} />
                </ListItemButton>
              </ListItem>
            </List> */}
            <List>
              {articleLinks.map((link) => (
                <ListItem disablePadding component="a" href={link} target="blank">
                  <ListItemButton>
                    <ListItemIcon>
                      <ArticleIcon />
                    </ListItemIcon>
                    <ListItemText primary={link} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEntityPopupClose}>Back</Button>
          <Button onClick={showSearchResults} autoFocus>
            Show all articles
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
          Entity1 - Entity2 related articles
        </DialogTitle>
        <DialogContent>
          <List>
            {articleLinks.map((link) => (
              <ListItem disablePadding component="a" href={link} target="blank">
                <ListItemButton>
                  <ListItemIcon>
                    <ArticleIcon />
                  </ListItemIcon>
                  <ListItemText primary={link} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLinePopupClose}>Back</Button>
          <Button onClick={showSearchResults} autoFocus>
            Show all articles
          </Button>
        </DialogActions>
      </Dialog>

      <Grid item container justifyContent="center" textAlign="center" spacing={3} marginTop={0} marginBottom={3} columns={16}>
        <Grid item xs={8}>
          <Button
            size="large"
            color="info"
            variant="text"
            onClick={showStatistics}
            sx={{
              borderRight: "1px solid",
              borderRadius: "3",
              width: "90%"
            }}
            style={{ backgroundColor: "rgb(38, 166, 154)" }}
          >
            statistics
          </Button>
        </Grid>

        <Grid item xs={8}>
          <Button
            size="large"
            color="info"
            variant="text"
            onClick={showSearchResults}
            sx={{
              borderRadius: "3",
              width: "90%"
            }}
            style={{ backgroundColor: "rgb(38, 166, 154)" }}
          >
            articles
          </Button>
        </Grid>
      </Grid>
    </Grid>

  );
}
