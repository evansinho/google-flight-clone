import axios from 'axios';

export const searchFlights = async (params) => {
    const options = {
        method: 'GET',
        url: 'https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights',
        params: {
            ...params,
            currency: 'USD',
            market: 'en-US',
            countryCode: 'US',
            sortBy: 'best',
        },
        headers: {
            'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
            'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
        },
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error('Error fetching flights:', error);
        throw new Error('Failed to fetch flight data');
    }
};

export const searchAirports = async (query) => {
    const options = {
        method: 'GET',
        url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport',
        params: { query },
        headers: {
            'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
            'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
        },
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error('Error searching airports:', error);
        throw new Error('Failed to fetch airport data');
    }
};
