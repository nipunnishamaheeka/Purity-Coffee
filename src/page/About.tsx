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
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            overflowX: 'auto',
            gap: 2,
            justifyContent: 'center',
            py: 4,
            pb: 2, 
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
                        minWidth: 200,
                        maxWidth: 200,
                        borderRadius: 2,
                        overflow: 'hidden',
                        flexShrink: 0,
                    }}
                >
                    <Box
                        component="img"
                        sx={{
                            height: 200,
                            width: '100%',
                            objectFit: 'cover',
                            borderRadius: 2,
                        }}
                        src={item.imgPath}
                        alt={item.label}
                    />
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
                        Enjoy Your Coffee <br /> with ZARA
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