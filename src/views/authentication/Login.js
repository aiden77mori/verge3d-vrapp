import React from "react";
import {
  Grid,
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  experimentalStyled,
  useMediaQuery,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/backgrounds/loginApagado.png";
import LogoIcon from "../../layouts/full-layout/logo/LogoIcon";
import PersonIcon from '@material-ui/icons/Person';
import { CustomCheckbox } from "../../components/forms/custom-elements/CustomCheckbox";
import { CustomTextField } from "../../components/forms/custom-elements/CustomTextField";
import { CustomFormLabel } from "../../components/forms/custom-elements/CustomFormLabel";
import PageContainer from "../../components/container/PageContainer";
import Customizer from '../../layouts/full-layout/customizer/Customizer';

import { FormattedMessage } from "react-intl";


const Login = () => {

  return (

    <PageContainer title="Login" description="this is Login page">
      <Grid
        container
        spacing={0}
        sx={{ height: "100vh", justifyContent: "center" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          lg={6}
          sx={{
            background: (theme) =>
              `${theme.palette.mode === "dark" ? "#104973" : "#f1fbfe"}`,
          }}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                position: {
                  xs: "relative",
                  lg: "absolute",
                },
                height: { xs: "auto", lg: "100vh" },
                right: { xs: "auto", lg: "-50px" },
                margin: "0 auto",
              }}
            >
              <img
                src={img1}
                alt="bg"
                style={{
                  paddingTop: "50px",
                  width: "200%",
                  maxWidth: "1920px",
                  // maxWidth: "812px",
                  height: "110%"
                }}
              />
            </Box>

            <Box
              sx={{
                p: 4,
                position: "absolute",
                top: "0",
              }}
            >
              <LogoIcon />
              {/* <Header /> */}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} lg={6} display="flex" alignItems="center" style={{zIndex: 1}}>
          <Grid container spacing={0} display="flex" justifyContent="center">
            <Grid item xs={12} lg={9} xl={6}>
              <Box
                sx={{
                  p: 4,
                  pb: 0,
                }}
              >             
                <Box
                  sx={{
                    mt: 4,
                  }}
                >
                  <Grid container spacing={2} display="flex" alignItems="center">
                    <Grid item xs={12} sm={1}>
                      <PersonIcon sx={{
                        mr: 2,
                        color: "primary.main",
                      }} />
                    </Grid>
                    <Grid item xs={12} sm={9}>
                    <Typography
                      color="textSecondary"
                      variant="h2"
                      fontWeight="500"
                      sx={{
                        mr: 1,
                      }}
                    >
                      Login
                    </Typography>
                    </Grid>
                  </Grid>
                  <CustomFormLabel htmlFor="email">
                  <FormattedMessage
                    id="login.email"
                    defaultMessage="Email Adress"
                  />
                  </CustomFormLabel>
                  <CustomTextField id="email" variant="outlined" type="email" fullWidth/>
                  <CustomFormLabel htmlFor="password">
                    <FormattedMessage
                        id="login.password"
                        defaultMessage="Password"
                      />
                  </CustomFormLabel>
                  <CustomTextField
                    id="password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    sx={{
                      mb: 3,
                    }}
                  />
                  <Box
                    sx={{
                      display: {
                        xs: "block",
                        sm: "flex",
                        lg: "flex",
                      },
                      alignItems: "center",
                    }}
                  >

                    <Typography
                    component={Link}
                    to="/auth/register"
                    fontWeight="500"
                    sx={{
                      display: "block",
                      textDecoration: "none",
                      color: "primary.main",
                      mb: "16px"
                    }}
                  >
                    <FormattedMessage
                      id="login.createAccount"
                      defaultMessage="Create an account"
                    />
                  </Typography>
                    <Box
                      sx={{
                        ml: "auto",
                      }}
                    >
                      <Typography
                        component={Link}
                        to="/auth/reset-password"
                        fontWeight="500"
                        sx={{
                          display: "block",
                          textDecoration: "none",
                          mb: "16px",
                          color: "primary.main",
                        }}
                      >
                      <FormattedMessage
                        id="login.forgotPassword"
                        defaultMessage="Forgot Password ?"
                      />
                      </Typography>
                    </Box>
                  </Box>
                  <FormGroup>
                      <FormControlLabel
                        control={<CustomCheckbox defaultChecked />}
                        label={
                          <FormattedMessage
                            id="login.rememberMe"
                            defaultMessage="Remember this Device"
                          />
                        }
                        sx={{
                          mb: 2,
                        }}
                      />
                    </FormGroup>

                  <Button
                    color="secondary"
                    variant="contained"
                    size="large"
                    fullWidth
                    component={Link}
                    to="/"
                    sx={{
                      pt: "10px",
                      pb: "10px",
                    }}
                  >
                    <FormattedMessage
                      id="login.signIn"
                      defaultMessage="Sign In"
                    />
                  </Button>
                  <Box
                    sx={{
                      position: "relative",
                      textAlign: "center",
                      mt: "20px",
                      mb: "0px",
                      "&::before": {
                        content: '""',
                        background: (theme) =>
                          `${
                            theme.palette.mode === "dark"
                              ? "#42464d"
                              : "#ecf0f2"
                          }`,
                        height: "1px",
                        width: "100%",
                        position: "absolute",
                        left: "0",
                        top: "13px",
                      },
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Customizer />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Login;
