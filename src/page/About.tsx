import React from 'react';
import {
    Box,
    Button,
    Container,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';

const COFFEE_ITEMS = [
    {
        imgPath: 'https://cafebistro.lk/wp-content/uploads/2020/06/14608694_f1024.jpg',
        label: 'Dalgona Coffee',
        description: 'Whipped coffee cream over cold milk'
    },
    {
        imgPath: 'https://www.datocms-assets.com/20941/1663775498-best-coffee-drinks-red-eye-coffee.png?auto=compress&fm=jpg&w=850',
        label: 'Iced Latte',
        description: 'Espresso with cold milk and ice'
    },
    {
        imgPath: 'https://www.vittoriacoffee.com/cdn/shop/articles/australian-coffee-types_acef18b5-04b8-452a-88af-599ff8a3ec5f_1x.svg?v=1741235938',
        label: 'Cold Brew',
        description: 'Slow-steeped coffee served over ice'
    },
    {
        imgPath: 'https://etimg.etb2bimg.com/photo/113047605.cms',
        label: 'Cappuccino',
        description: 'Espresso with steamed milk and foam art'
    },
    {
        imgPath: 'https://vaya.in/recipes/wp-content/uploads/2018/05/Coffee.jpg',
        label: 'Classic Latte',
        description: 'Smooth espresso with steamed milk'
    },
];

const CoffeeGrid = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: { xs: 'nowrap', md: 'wrap' },
            overflowX: { xs: 'auto', md: 'visible' },
            gap: 3,
            justifyContent: { xs: 'flex-start', md: 'center' },
            py: 5,
            px: { xs: 2, md: 0 },
            pb: 3, 
            '&::-webkit-scrollbar': {
                display: 'none'
            },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
        }}>
            {COFFEE_ITEMS.map((item, index) => (
                <Box
                    key={index}
                    sx={{
                        minWidth: { xs: 220, sm: 260 },
                        maxWidth: { xs: 220, sm: 260 },
                        borderRadius: 2,
                        overflow: 'hidden',
                        flexShrink: 0,
                        position: 'relative',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: { xs: 'none', md: 'scale(1.05)' },
                            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                            '& .coffee-info': {
                                opacity: 1,
                            }
                        },
                    }}
                >
                    <Box
                        component="img"
                        sx={{
                            height: { xs: 220, sm: 280 },
                            width: '100%',
                            objectFit: 'cover',
                            borderRadius: 2,
                            transition: 'filter 0.3s ease',
                            '&:hover': {
                                filter: { xs: 'brightness(1)', md: 'brightness(0.7)' },
                            }
                        }}
                        src={item.imgPath}
                        alt={item.label}
                        loading="lazy"
                    />
                    <Box 
                        className="coffee-info"
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: 1.5,
                            background: 'rgba(0,0,0,0.7)',
                            color: 'white',
                            opacity: { xs: 1, md: 0 }, // Always visible on mobile
                            transition: 'opacity 0.3s ease',
                            borderBottomLeftRadius: 2,
                            borderBottomRightRadius: 2,
                        }}
                    >
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            {item.label}
                        </Typography>
                        <Typography variant="body2">
                            {item.description}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

const CoffeeShopLanding = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{
            minHeight: '100vh',
            backgroundColor: '#f8f3ee',
            position: 'relative',
            overflowX: 'hidden',
        }}>
            <Container maxWidth="lg" sx={{ pt: 2 }}>
                
                {/* Hero Section */}
                <Box sx={{
                    pt: { xs: 6, md: 10 },
                    pb: { xs: 4, md: 6 },
                    textAlign: 'center'
                }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            lineHeight: 1.2,
                            color: '#222',
                            mb: 2
                        }}
                    >
                        Enjoy Your Coffee <br /> with Purity
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: 600,
                            mx: 'auto',
                            color: '#444',
                            mb: 4,
                            px: 2
                        }}
                    >
                        Discover tranquility at Ngopi a sanctuary for unwinding,
                        where your evenings are perfected with relaxation and rich flavors.
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#6d4534',
                            px: 4,
                            py: 1.5,
                            textTransform: 'uppercase',
                            '&:hover': {
                                backgroundColor: '#5a3a2d',
                            }
                        }}
                    >
                        Explore Product
                    </Button>
                </Box>

                {/* Coffee Grid Display */}
                <CoffeeGrid />
            </Container>
        </Box>
    );
};

export default CoffeeShopLanding;