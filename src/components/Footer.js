import React from 'react';
import {
    Box,
    TextField,
    MenuItem,
    Typography,
    Divider,
  } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Footer = ({theme}) => {
    const languages = ["English (United States)", "French", "Spanish"];
    const locations = ["Nigeria", "United States"];
    const currencies = ["NGN", "USD", "EUR"];
  return (
    <>
    <Divider
        sx={{
            width: "100%",
            borderColor: "gray",
            marginTop: "7rem"
        }}
    />
    <Box
          sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
              mt: 1,
              bgcolor: "#222",
              p: 2,
              borderRadius: 2,
              maxWidth: 800,
              width: "100%",
              backgroundColor: theme.palette.background.default,
          }}
      >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LanguageIcon />
              <TextField
                  select
                  defaultValue={languages[0]}
                  size="small"
                  sx={{ color: "white" }}
              >
                  {languages.map((lang) => (
                      <MenuItem key={lang} value={lang}>
                          {lang}
                      </MenuItem>
                  ))}
              </TextField>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LocationOnIcon />
              <TextField
                  select
                  defaultValue={locations[0]}
                  size="small"
                  sx={{ color: "white" }}
              >
                  {locations.map((loc) => (
                      <MenuItem key={loc} value={loc}>
                          {loc}
                      </MenuItem>
                  ))}
              </TextField>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <AttachMoneyIcon />
              <TextField
                  select
                  defaultValue={currencies[0]}
                  size="small"
                  sx={{ color: "white" }}
              >
                  {currencies.map((currency) => (
                      <MenuItem key={currency} value={currency}>
                          {currency}
                      </MenuItem>
                  ))}
              </TextField>
          </Box>
        </Box>
        <Typography
          variant="body2"
          sx={{ mt: 3, textAlign: "center", color: "gray" }}
        >
              Current language and currency options applied: English (United States) - United States - USD <br/>
              Displayed currencies may differ from the currencies used to purchase flights. Learn more
        </Typography></>
  )
}

export default Footer;
