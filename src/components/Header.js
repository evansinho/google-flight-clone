import React, { useState } from 'react';
import { searchAirports, searchFlights } from '../services/api';
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Autocomplete,
  Grid,
} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";

const Header = ({ onFlightSearch, setLoading, theme, darkMode }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const tripOptions = ["Round trip", "One way"];
  const classes = ["Economy", "Business", "First Class"];

  const handleSearch = async () => {
    try {
      setLoading(true);
      const originData = await searchAirports(origin);
      const destinationData = await searchAirports(destination);
      const originAirport = originData.data[0];
      const destinationAirport = destinationData.data[0];
      const flightData = await searchFlights({
        originSkyId: originAirport.skyId,
        destinationSkyId: destinationAirport.skyId,
        originEntityId: originAirport.entityId,
        destinationEntityId: destinationAirport.entityId,
        date: departureDate,
        returnDate: returnDate,
        cabinClass: 'economy',
        adults: '1',
      });
      onFlightSearch(flightData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: darkMode ? "#37373A" : "#fff",
        p: 2,
        borderRadius: 2,
        maxWidth: "80%",
        margin: "10px auto",
      }}
    >
      <Grid container spacing={2}>
        {/* Trip Type, Travelers, and Class */}
        <Grid item xs={12} sm={4}>
          <Autocomplete
            options={tripOptions}
            defaultValue="Round trip"
            renderInput={(params) => <TextField {...params} label="Trip Type" fullWidth />}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Travelers"
            type="number"
            defaultValue={1}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            select
            label="Class"
            defaultValue="Economy"
            fullWidth
          >
            {classes.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* From, To, Departure, and Return */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="From"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Where to?"
            placeholder="Where to?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Departure"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Return"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            fullWidth
          />
        </Grid>

        {/* Search Button */}
        <Grid item xs={12}>
          <Button
            variant="contained"
            startIcon={<SearchIcon />}
            onClick={handleSearch}
            sx={{
              backgroundColor: "#8AB4F7",
              color: "black",
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: "20px",
              paddingX: 3,
              paddingY: 1.2,
              "&:hover": {
                backgroundColor: "#A2B8FF",
              },
            }}
          >
            Explore
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
