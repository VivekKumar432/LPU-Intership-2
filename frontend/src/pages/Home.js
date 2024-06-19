import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
    return (
        <Container maxWidth="md">
            <Box mt={8}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Welcome to the ERP System
                </Typography>
                <Typography variant="body1">
                    This is the home page. You can register, log in, and access the dashboard.
                </Typography>
            </Box>
        </Container>
    );
};

export default Home;
