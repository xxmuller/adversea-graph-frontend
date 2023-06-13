import {
  Box, Divider, Typography, Link, Stack, Grid
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ButtonPDF from "./ReportButton";
import { useUser } from "../Utils/UserContext";
import theme from "../Style/Theme";

export default function ResultItem({ item }) {
  const { user } = useUser();

  return (
    <Grid container justifyContent="space-between" alignItems="flex-start">
      <Grid item xs={user ? 11.5 : 12} md={user ? 11.6 : 12} lg={user ? 11.7 : 12}>
        <Stack spacing={1}>
          <Grid item>
            <Stack
              direction="row"
              divider={(
                <Divider
                  sx={{ borderRightWidth: 0.5 }}
                  style={{ background: "#757575" }}
                  orientation="vertical"
                  flexItem
                />
              )}
              spacing={1}
            >
              <Box>
                <Typography color="secondary">
                  {item.published.length !== 0
                    ? item.published[0].slice(5, -13)
                    : "Missing published date"}
                </Typography>
              </Box>
              <Link href={item.link} target="_blank" rel="noopener" underline="none">
                <Typography color="secondary">
                  {new URL(item.link).hostname.replace("www.", "")}
                </Typography>
              </Link>
              <RouterLink to={`/archive?link=${item.link}`}>
                <Typography color="secondary">Archived Article</Typography>
              </RouterLink>
            </Stack>
          </Grid>
          <Link
            style={{ color: theme.palette.primary.main }}
            href={item.link}
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            <Typography variant="h2">{item.title}</Typography>
          </Link>
          <Grid container flexWrap="wrap" direction="row" color="secondary">
            {item.keywords.map((crime) => (
              <Grid pr={1} pb={1} item key={crime}>
                <Box
                  sx={{
                    pl: 0.7,
                    pr: 0.7,
                    borderRadius: 1.5
                  }}
                  backgroundColor="#e6e7eb"
                >
                  <Typography color="secondary">{crime}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Grid>
      {user && (
        <Grid item xs={0.5} md={0.4} lg={0.3} textAlign="end">
          <Stack>
            <ButtonPDF articleId={item._id} articleTitle={item.title} />
          </Stack>
        </Grid>
      )}
    </Grid>
  );
}
