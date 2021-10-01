import React from "react";
import { Box, Container, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import bg1 from "../../assets/images/backgrounds/blog-bg.jpg";

import PageContainer from "../../components/container/PageContainer";

const Error = () => {
  return (
    <PageContainer title="Error" description="this is Error page">
      <Box
        display="flex"
        flexDirection="column"
        height="100vh"
        textAlign="center"
        justifyContent="center"
        sx={{ backgroundColor: "#e4f5ff" }}
      >
        <Container maxWidth="md">
          <img src={bg1} alt="error" />
          <Typography
            align="center"
            color="textPrimary"
            variant="h1"
            sx={{
              color: (theme) =>
                `${
                  theme.palette.mode === "dark"
                    ? "rgba(0, 0, 0, 0.87)"
                    : "rgba(0, 0, 0, 0.87)"
                }`,
            }}
          >
            OH No, The page you are looking for does not exist.
          </Typography>
          <Typography
            align="center"
            color="textPrimary"
            variant="subtitle1"
            sx={{
              color: (theme) =>
                `${
                  theme.palette.mode === "dark"
                    ? "rgba(0, 0, 0, 0.87)"
                    : "rgba(0, 0, 0, 0.87)"
                }`,
            }}
          >
            <Box p={2}>
              (404) The Page you are looking for is not available. kindly click
              on the back to home button
            </Box>
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            component={Link}
            to="/"
            disableElevation
          >
            Back to Home
          </Button>
        </Container>
      </Box>
    </PageContainer>
  );
};

export default Error;
