import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  CircularProgress,
} from '@mui/material';
import { formatTime, formatMinutesToHours } from '../utils/helper';

const Result = ({ flights, loading }) => {
  return (
    <>
      {loading ? (
        <Box>
          <CircularProgress />
        </Box>
      ) : (
        <Container maxWidth="lg" sx={{ padding: '2rem 1rem', marginTop: '4rem' }}>
          {/* Header Section */}
          <Box sx={{ marginBottom: '2rem', paddingX: { xs: '1rem', sm: 0 } }}>
            <Grid container spacing={2} alignItems="center">
              {/* Text Content */}
              <Grid item xs={12} sm={8}>
                <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                  <Typography variant="h5" gutterBottom>
                    Departing Flights
                  </Typography>
                  <Typography variant="h6" color="textSecondary" fontSize="15px">
                    Prices include required taxes + fees for 1 adult. Optional charges
                    and bag fees may apply.
                  </Typography>
                </Box>
              </Grid>
              {/* Sort By Dropdown */}
              <Grid
                item
                xs={12}
                sm={4}
                sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' } }}
              >
                <FormControl
                  variant="outlined"
                  sx={{
                    minWidth: 120,
                    width: { xs: '100%', sm: 'auto' },
                  }}
                >
                  <InputLabel>Sort by</InputLabel>
                  <Select label="Sort by" value={10}>
                    <MenuItem value={10}>Time</MenuItem>
                    <MenuItem value={20}>Price</MenuItem>
                    <MenuItem value={30}>Emissions</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>

          {/* Flight Results */}
          {flights.map((flight, index) => (
            <Card
              key={index}
              sx={{
                marginBottom: '1rem',
                borderTopStyle: 'solid',
                borderLeftStyle: 'solid',
                borderRightStyle: 'solid',
                borderBottomStyle: 'solid',
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              }}
            >
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  {/* Airline Logo */}
                  <Grid item xs={12} sm={2} md={1}>
                    <img
                      src={flight.legs[0].carriers.marketing[0].logoUrl}
                      alt={flight.airline}
                      style={{ maxWidth: '100%', maxHeight: '50px', objectFit: 'contain' }}
                    />
                  </Grid>

                  {/* Flight Details */}
                  <Grid item xs={12} sm={6} md={5}>
                    <Box display="flex" flexDirection="column" justifyContent="space-between">
                      <Typography variant="h6">
                        {formatTime(flight.legs[1].departure)} - {formatTime(flight.legs[1].arrival)}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {flight.legs[0].carriers.marketing[0].name}
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Duration*/}
                  <Grid item xs={6} sm={2}>
                    <Typography variant="body2">
                      {formatMinutesToHours(flight.legs[0].durationInMinutes)}
                    </Typography>
                  </Grid>

                  {/* Price and Round Trip Status */}
                  <Grid item xs={6} sm={2}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems={{ xs: 'flex-start', sm: 'flex-end' }}
                    >
                      <Typography variant="h6">{flight.price.formatted}</Typography>
                      <Typography variant="body2">Round Trip</Typography>
                    </Box>
                  </Grid>

                  {/* Action Button */}
                  <Grid item xs={12} sm={2} md={2}>
                    <Box display="flex" justifyContent={{ xs: 'center', sm: 'flex-end' }}>
                      <Button variant="outlined" size="small">
                        View Details
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Container>
      )}
    </>
  );
};

export default Result;
