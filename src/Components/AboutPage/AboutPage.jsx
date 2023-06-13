import {
  Typography, Grid, Link, IconButton
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useWindowSize from "../../Utils/Screen";
import MainHeading from "../MainHeading";

export default function AboutPage() {
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const shouldCollapse = width < 992;

  const searchDivStyle = {
    margin: "auto",
    padding: shouldCollapse ? "20px 7%" : "20px 20%"
  };

  return (
    <Grid container style={searchDivStyle}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <IconButton size="large" onClick={() => navigate(-1)}>
            <ArrowBackIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <MainHeading text="about adversea" />
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={0.5} direction="column">
        <Grid item>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <Typography variant="h2" color="primary">
                what is adversea?
              </Typography>
            </Grid>
            <Grid item>
              <Typography color="secondary" fontSize="1rem">
                adverse media screening portal designed to search for natural and legal persons with
                an unfavourable reputation. the key impulse behind this project is to provide a
                solution for companies where the integrity of their potential employees or partners
                is a key to reliable and safe operation. adversea is a project of Venant
                non-government organization with headquarters in the European Union. we are
                committed to the mission of improving every day&apos;s life of people through the
                implementation of innovative ideas.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <Typography variant="h2" color="primary">
                source of information
              </Typography>
            </Grid>
            <Grid item>
              <Typography color="secondary" fontSize="1rem">
                available international online media.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <Typography variant="h2" color="primary">
                how to use
              </Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={1} direction="column">
                <Grid item>
                  <Typography color="secondary" fontSize="1rem">
                    the current state of the page represents the prototype. we work every day to
                    improve the portal so we can deliver the highest quality possible. stay tuned to
                    be the first to experience updated adversea.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3" color="secondary">
                    search
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography color="secondary" fontSize="1rem">
                    simply enter the name in the search field to find the person you want.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3" color="secondary">
                    keywords
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography color="secondary" fontSize="1rem">
                    we only show articles that potentially associate with suspicious activity or
                    commited crimes. you can use advanced search to define which suspicious
                    activities or commited crimes you want to search (keywords). advanced search
                    only provides keyword categories, whereas showed articles will contain specific
                    keywords from one or more categories.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3" color="secondary">
                    regions
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography color="secondary" fontSize="1rem">
                    the prototype covers whole Europe and is slowly growing further. you can specify
                    the region in which the article was published in the advanced search.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3" color="secondary">
                    archive
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography color="secondary" fontSize="1rem">
                    saving article content allows us to provide it on the archive page. this feature
                    is useful in case the article is deleted in the original source.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3" color="secondary">
                    pdf report
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography color="secondary" fontSize="1rem">
                    registered users are privileged to store articles into pdf report. simply add
                    interesting article to pdf report with a small button next to the article title.
                    combine articles from multiple searches. after the report is done, click on
                    download in the pdf report section and you are done!
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <Typography variant="h2" color="primary">
                advanced use
              </Typography>
            </Grid>
            <Grid item>
              <Typography color="secondary" fontSize="1rem">
                direct access to articles is provided by API. if you would like to use our API for
                your project, contact us for further information.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <Typography variant="h2" color="primary">
                privacy policy
              </Typography>
            </Grid>
            <Grid item>
              <Typography color="secondary" fontSize="1rem">
                one of our main priorities is the privacy of our visitors.
                {" "}
                <Link
                  href="https://www.privacypolicygenerator.info/live.php?token=Efpd5PrwYduDf9W7A7fSPxHDpF7Ahgvn"
                  target="_blank"
                  rel="noopener"
                >
                  the privacy policy document
                </Link>
                {" "}
                contains types of information that is collected and recorded by adversea and how we
                use it.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <Typography variant="h2" color="primary">
                contact us
              </Typography>
            </Grid>
            <Grid item>
              <Typography color="secondary" fontSize="1rem">
                if you have something on your mind or just want to talk, contact us on
                {" "}
                <Link href="mailto:info.adversea@gmail.com" target="_blank" rel="noopener">
                  info.adversea@gmail.com
                </Link>
                .
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
