import React from 'react';
import { Box, Typography, Button, Container, Grid, useTheme, useMediaQuery } from '@mui/material';


const BlogSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Box sx={{ pr: { md: 4 }, pb: { xs: 4, md: 0 } }}>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            gutterBottom
                            sx={{ fontWeight: 400 }}
                        >
                           Story
                        </Typography>

                        <Typography
                            variant="h3"
                            component="h2"
                            gutterBottom
                            sx={{
                                fontWeight: 500,
                                mb: 4,
                                fontSize: { xs: '2rem', md: '2.5rem' , color: '#6b6b6b'}
                            }}
                        >
                            Coffee Stories & Tips
                        </Typography>

                        <Typography variant="body1" paragraph sx={{ mb: 2, color: '#6b6b6b' }}>
                            We have been with you since a winter day in 2001. We are ready
                            to warm your hands with love and our wish is to see your love.
                            We are here to be together and we request that if you feel lonely
                            on a rainy day, come to ZARA and spend your day with us.
                        </Typography>

                        <Typography variant="body1" paragraph sx={{ mb: 4, color: '#6b6b6b' }}>
                            All basic ZARA products are made by the manufacturers
                            themselves and this is not just a cafe but an environment to
                            create your lasting moments
                        </Typography>

                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: '#5d1914',
                                color: 'white',
                                px: 4,
                                py: 1.5,
                                borderRadius: 0,
                                '&:hover': {
                                    bgcolor: '#4a1310',
                                },
                                textTransform: 'none',
                                fontWeight: 500
                            }}
                        >
                            READ MORE
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ position: 'relative', height: { xs: 300, md: 400 } }}>
                        <Box
                            component="img"
                            src="https://www.nescafe.com/gb/sites/default/files/2023-09/french-coffee-banner-desktop_2880x1660.jpg"
                            alt="Cup of coffee"
                            sx={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                width: '60%',
                                height: '60%',
                                objectFit: 'cover',
                                borderRadius: '4px',
                                zIndex: 1
                            }}
                        />

                        {/* Coffee beans image */}
                        <Box
                            component="img"
                            src="https://img.chemie.de/Portal/News/63e51e0602b22__KIWXSp9o.png?tr=w-1021,h-766,cm-extract,x-0,y-2:n-xzoom"
                            alt="Coffee beans"
                            sx={{
                                position: 'absolute',
                                right: 0,
                                bottom: 0,
                                width: '60%',
                                height: '60%',
                                objectFit: 'cover',
                                borderRadius: '4px',
                                zIndex: 0
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BlogSection;