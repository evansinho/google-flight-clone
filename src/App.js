import React, { useState } from "react";
import Header from './components/Header';
import Result from "./components/Result";
import Footer from "./components/Footer";
import {
  AppBar,
  Typography,
  Box,
  Button,
  IconButton,
  Avatar
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFlightSearch = (flightData) => {
    setFlights(flightData.data.itineraries || []);
  };

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#faf8f6",
      },
      text: {
        primary: "#000",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "rgb(32, 33, 36)",
      },
      text: {
        primary: "#fff",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          backgroundImage: `url(${
            darkMode
              ? "https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_dark_theme_4.svg"
              : "https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_4.svg"
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "top center",
        }}
      >
        {/* Navigation Bar */}
        <AppBar
          position="static"
          sx={{
            backgroundColor: darkMode ? "#1e1e1e" : "#fff",
            color: darkMode ? "#fff" : "#000",
            boxShadow: "none",
            padding: "10px",
            borderBottomStyle: "ridge",
            borderBottomColor: "#d3d3d3",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            [theme.breakpoints.down('sm')]: {
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              [theme.breakpoints.down('sm')]: {
                flexDirection: "column",
                gap: 1,
              },
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", marginRight: "15px" }}>
              Google
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                [theme.breakpoints.down('sm')]: {
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 1,
                },
              }}
            >
              <Button color="inherit" sx={{ textTransform: "none", fontSize: "16px" }}>
                Explore
              </Button>
              <Button color="inherit" sx={{ textTransform: "none", fontSize: "16px" }}>
                Flights
              </Button>
              <Button color="inherit" sx={{ textTransform: "none", fontSize: "16px" }}>
                Hotels
              </Button>
              <Button color="inherit" sx={{ textTransform: "none", fontSize: "16px" }}>
                Vacation Rentals
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              [theme.breakpoints.down('sm')]: {
                marginTop: 2,
              },
            }}
          >
            <IconButton
              onClick={() => setDarkMode(!darkMode)}
              color="inherit"
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Avatar>H</Avatar>
          </Box>
        </AppBar>

        {/* Content Section */}
        <Box
          sx={{
            padding: "40px 20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1200px",
            margin: "0 auto",
            marginTop: "12%",
            [theme.breakpoints.down('sm')]: {
              marginTop: "5%",
              padding: "20px 10px",
            },
          }}
        >
          {/* Main Title */}
          <Typography variant="h3" sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}>
            Flights
          </Typography>
          <Header 
            darkMode={darkMode} 
            theme={theme} 
            setLoading={setLoading} 
            onFlightSearch={handleFlightSearch}
          />
          <Result flights={flights} loading={loading} />
          {/* Footer */}
          <Footer theme={theme}/>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
