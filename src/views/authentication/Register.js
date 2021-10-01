import React from "react";
import { Grid, Box, Typography, Button, Tab, Tabs, Fab, MenuItem, Select, FormControlLabel, Checkbox, Input, experimentalStyled, useMediaQuery,  Container, } from "@material-ui/core";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/backgrounds/loginEncendido.png";
import LogoIcon from "../../layouts/full-layout/logo/LogoIcon";
import AddIcon from "@material-ui/icons/Add";

import { CustomTextField } from "../../components/forms/custom-elements/CustomTextField";
import { CustomFormLabel } from "../../components/forms/custom-elements/CustomFormLabel";
import PageContainer from "../../components/container/PageContainer";
import PersonIcon from '@material-ui/icons/Person';
import { useSelector } from "react-redux";

import Customizer from "../../layouts/full-layout/customizer/Customizer";
import Footer from "../../layouts/full-layout/footer/Footer";
import { FormattedMessage } from "react-intl";

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};


const Register = () => {

  const [value, setValue] = React.useState('participant');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  return (
    <PageContainer title="Register" description="this is Register page">
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
                  height: "110%",
                  zIndex: 0
                }}
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              sx={{
                p: 4,
                position: "absolute",
                top: "0",
              }}
            >
              <LogoIcon />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} lg={6} display="flex" alignItems="center" style={{zIndex: 1}}>
          <Grid container spacing={0} display="flex" justifyContent="center">
            <Grid item xs={12} lg={9} xl={8}>
              <Box
                sx={{
                  p: 4,
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
                      <FormattedMessage
                        id="register.register"
                        defaultMessage="Register"
                      />
                    </Typography>
                    </Grid>
                  </Grid>

                <Box
                  sx={{
                    mt: 2,
                  }}
                >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="secondary"
              allowScrollButtonsMobile
              scrollButtons
              indicatorColor="secondary"
            >
              <Tab
                sx={{
                  textTransform: "capitalize",
                }}
                label={
                  <FormattedMessage
                  id="register.participant"
                  defaultMessage="Participant"
                />
                }
                value = "participant"
                {...a11yProps(0)}
              />
              <Tab
                sx={{
                  textTransform: "capitalize",
                }}
                label={
                  <FormattedMessage
                  id="register.company"
                  defaultMessage="Company"
                />
                }
                value = "company"
                {...a11yProps(1)}
              />
              <Tab
                sx={{
                  textTransform: "capitalize",
                }}
                label={
                  <FormattedMessage
                  id="register.student"
                  defaultMessage="Student"
                />
                }
                value= "student"
                {...a11yProps(2)}
              />
              <Tab
                sx={{
                  textTransform: "capitalize",
                }}
                label={
                  <FormattedMessage
                  id="register.senior"
                  defaultMessage="Senior(+65)"
                />
                }
                value="senior"
                {...a11yProps(3)}
              />
              <Tab
                sx={{
                  textTransform: "capitalize",
                }}
                label={
                  <FormattedMessage
                  id="register.professor"
                  defaultMessage="Professor"
                />
                }
                value= "professor"
                {...a11yProps(4)}
              />
            </Tabs>
          </Box>

                {((value === 'participant') || (value ==='student') || (value ==='senior') || (value ==='professor'))?
                <div>
                  <Grid item xs={12}>
                    <CustomFormLabel id="label">
                    <FormattedMessage
                      id="register.documentType"
                      defaultMessage="Document Type"
                    />
                    </CustomFormLabel>
                    <Select
                      variant="outlined"
                      required
                      fullWidth
                      id="tdocument"
                      labelId="Type Document"
                      name="tdocument"
                    >
                      <MenuItem value="dni">DNI</MenuItem>
                      <MenuItem value="ce">CE</MenuItem>
                    </Select>
                    <CustomFormLabel htmlFor="number">
                    <FormattedMessage
                      id="register.documentNumber"
                      defaultMessage="Document Number"
                    />
                    </CustomFormLabel>
                    <CustomTextField id="documentNumber" variant="outlined" fullWidth required type="number" max="8"/>
                  </Grid>
                </div>
                : (
                  <div>
                      <CustomFormLabel htmlFor="number">RUC</CustomFormLabel>
                      <CustomTextField id="ruc" variant="outlined" fullWidth required type="number"/>
                  </div>
                )
              }
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <CustomFormLabel htmlFor="name">
                        <FormattedMessage
                        id="register.name"
                        defaultMessage="Name"
                      />
                      </CustomFormLabel>
                      <CustomTextField id="name" type="text" variant="outlined" fullWidth required autoFocus autoComplete="fname"/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomFormLabel htmlFor="name">
                        <FormattedMessage
                          id="register.lname"
                          defaultMessage="Last Name"
                        />
                      </CustomFormLabel>
                      <CustomTextField id="lastName" type="text" variant="outlined" fullWidth required autoFocus autoComplete="lname"/>
                    </Grid>
                  </Grid>    
                  {
                    ((value === 'student'))?
                    <div>
                      <CustomFormLabel htmlFor="name">
                        <FormattedMessage
                            id="register.college"
                            defaultMessage="College"
                          />
                      </CustomFormLabel>
                      <CustomTextField id="college" variant="outlined" fullWidth required />
                      <CustomFormLabel htmlFor="name">
                        <FormattedMessage
                              id="register.collegeCard"
                              defaultMessage="College Card"
                        />
                      </CustomFormLabel>
                    <Grid>
                    <label htmlFor="upload-photo" >
                            <input
                              style={{ display: "none" }}
                              name="upload-photo"
                              id="upload-photo"
                              type="file"
                              fullWidth
                            />
                            <Fab 
                              color="primary"
                              size="large"
                              component="span"
                              aria-label="add"
                              style={{ width: "100%"}}
                              variant="extended"
                              sx={{}}
                            >
                            <AddIcon />
                              <FormattedMessage
                                id="register.uploadPhoto"
                                defaultMessage="Upload Photo"
                              />
                            </Fab>
                    </label>
                    </Grid>

                    </div> :
                    <div>
                      <CustomFormLabel htmlFor="name">
                      <FormattedMessage
                              id="register.companyName"
                              defaultMessage="Company Name"
                        />
                      </CustomFormLabel>
                      <CustomTextField id="companyname" variant="outlined" fullWidth required />
                    </div>
                  }   
                  {
                    ((value === 'participant'))?
                    <div>
                      <CustomFormLabel htmlFor="name">
                      <FormattedMessage
                              id="register.job"
                              defaultMessage="Job"
                        />
                      </CustomFormLabel>
                      <CustomTextField id="job" variant="outlined" fullWidth required />
                    </div> :
                    <div></div>
                  }  
                  <CustomFormLabel htmlFor="phone">
                    <FormattedMessage
                                id="register.pNumber"
                                defaultMessage="Phone Number"
                    />
                  </CustomFormLabel>
                  <CustomTextField id="number" variant="outlined" fullWidth type="text"/>

                  <CustomFormLabel htmlFor="name">
                    <FormattedMessage
                                id="register.country"
                                defaultMessage="Country"
                    />
                  </CustomFormLabel>
                  <CustomTextField id="country" variant="outlined" fullWidth type="text"/>

                  <CustomFormLabel htmlFor="email">
                    <FormattedMessage
                        id="register.email"
                        defaultMessage="Email Adress"
                      />
                  </CustomFormLabel>
                  <CustomTextField id="email" variant="outlined" fullWidth type="email"/>

                  <CustomFormLabel htmlFor="email">
                    <FormattedMessage
                          id="register.cEmail"
                          defaultMessage="Confirm your Email"
                    />
                  </CustomFormLabel>
                  <CustomTextField id="confirmEmail" variant="outlined" fullWidth type="email"/>

                  <CustomFormLabel htmlFor="password">
                  <FormattedMessage
                          id="register.password"
                          defaultMessage="Password"
                    />
                  </CustomFormLabel>
                  <CustomTextField
                    id="password"
                    variant="outlined"
                    fullWidth
                    type="password"                        
                    sx={{
                      mb: 1.5,
                    }}

                  />
                  {
                    ((value === 'senior') || (value === 'professor'))?
                    <div>
                      <CustomFormLabel htmlFor="name">
                      <FormattedMessage
                          id="register.documentPhoto"
                          defaultMessage="Document Photo"
                    />
                      </CustomFormLabel>
                    <Grid sx={{mb: 3 }}>
                    <label htmlFor="upload-photo" >
                            <input
                              style={{ display: "none" }}
                              name="upload-photo"
                              id="upload-photo"
                              type="file"
                              fullWidth
                            />
                            <Fab 
                              color="primary"
                              size="large"
                              component="span"
                              aria-label="add"
                              style={{ width: "100%"}}
                              variant="extended"
                              sx={{}}
                            >
                            <AddIcon />
                              <FormattedMessage
                                id="register.uploadPhoto"
                                defaultMessage="Upload Photo"
                              />
                            </Fab>
                    </label>
                    </Grid>
                    </div> :
                    <div>

                    </div>
                  }
                <Grid container spacing={2} sx={{
                      mb: 3,
                    }}>
                  <Grid item xs={6}>
                      <FormControlLabel
                      control={<Checkbox value="termsAndConditions" color="primary" />}
                      label={
                        <FormattedMessage
                        id="register.acceptTerms"
                        defaultMessage="Accept Terms and conditions"
                  />
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" color="primary" />}
                      label={
                        <FormattedMessage
                        id="register.iWant"
                        defaultMessage="I want to get most our of Agromin"
                  />
                      }
                    />
                  </Grid>
                </Grid>
                <Box display="flex" alignItems="center" sx={{mb: 2}}>
                  <Typography
                    color="textSecondary"
                    variant="h6"
                    fontWeight="400"
                    sx={{
                      mr: 1,
                    }}
                  >
                    <FormattedMessage
                        id="register.aAccount"
                        defaultMessage="Already have an Account?"
                  />
                  </Typography>
                  <Typography
                    component={Link}
                    to="/auth/login"
                    fontWeight="500"
                    sx={{
                      display: "block",
                      textDecoration: "none",
                      color: "primary.main",
                    }}
                  >
                    <FormattedMessage
                        id="register.signIn"
                        defaultMessage="Sign In"
                  />
                  </Typography>
                </Box>
                  <Button
                    color="primary"
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
                        id="register.signUp"
                        defaultMessage="Sign Up"
                  />
                  </Button>
                  
                  <Box
                    sx={{
                      position: "relative",
                      textAlign: "center",
                      mt: "20px",
                      mb: "20px",
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


                      <div style={{paddingbottom: "30px"}}/>
                      <Footer />
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

export default Register;
