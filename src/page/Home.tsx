import React, { useEffect, useRef } from 'react';
import {
    Typography,
    Button,
    Box,
    Container,
    Grid,
    Paper,
    Avatar,
    AvatarGroup
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import CoffeeShopLanding from './About';
import CoffeeMenu from './CoffeeMenu';
import Comments from './Comments';
import BlogSection from './Blog';

// Coffee product type
interface CoffeeProduct {
    name: string;
    price: string;
    image: string;
}

const Home: React.FC = () => {
    const aboutSectionRef = useRef<HTMLDivElement>(null);
    const testimonialsSectionRef = useRef<HTMLDivElement>(null);
    const blogSectionRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    
    // Best selling products
    const bestSellers: CoffeeProduct[] = [
        {
            name: 'Caffè Latte',
            price: 'GHS 32.99',
            image: '/cafe-latte.jpg'
        },
        {
            name: 'Black Iced Coffee',
            price: 'GHS 15.90',
            image: '/black-iced-coffee.jpg'
        },
        {
            name: 'Coffee Mocha',
            price: 'GHS 12.99',
            image: '/coffee-mocha.jpg'
        }
    ];

    useEffect(() => {
        if (location.hash === '#about-section') {
            setTimeout(() => {
                if (aboutSectionRef.current) {
                    const yOffset = -80; // Adjust based on navbar height
                    const y = aboutSectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100);
        } else if (location.hash === '#testimonials-section') {
            setTimeout(() => {
                if (testimonialsSectionRef.current) {
                    const yOffset = -80; // Adjust based on navbar height
                    const y = testimonialsSectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100);
        } else if (location.hash === '#blog-section') {
            setTimeout(() => {
                if (blogSectionRef.current) {
                    const yOffset = -80; // Adjust based on navbar height
                    const y = blogSectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    return (
        <Box sx={{
            bgcolor: '#FFF5EE',
            position: 'relative'
        }}>
            {/* Main Content */}
            <Container maxWidth="xl" sx={{ 
                pt: 2,
                pb: 6,
                px: { xs: 2, sm: 3, md: 4 }
            }}>
                {/* Main Content */}
                <Grid container spacing={3} sx={{ mt: 0 }}>
                    {/* Left Column - Text and CTAs */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ position: 'relative', py: { xs: 2, md: 4 } }}>
                            {/* Floating coffee bean decoration */}
                            <Box
                                component="img"
                                src="https://media.cnn.com/api/v1/images/stellar/prod/150929101049-black-coffee-stock.jpg?q=w_3000,h_3074,x_0,y_0,c_fill"
                                alt="Coffee bean"
                                sx={{
                                    position: 'absolute',
                                    width: '30px',
                                    top: '0px',
                                    left: '250px',
                                    transform: 'rotate(45deg)',
                                    opacity: 0.8,
                                    display: { xs: 'none', md: 'block' } // Hide on small screens
                                }}
                            />

                            {/* Heading and Subheading */}
                            <Typography
                                variant="h2"
                                component="h1"
                                sx={{
                                    fontWeight: 700,
                                    color: '#1A0F00',
                                    mb: 2,
                                    fontSize: { xs: '2.5rem', md: '3.5rem' }
                                }}
                            >
                                Awaken Your Senses
                            </Typography>

                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: '#5C3824',
                                    mb: 4,
                                    fontSize: '1.1rem',
                                    maxWidth: '80%',
                                    lineHeight: 1.6
                                }}
                            >
                                Because life is too short for bland coffee. Our brews are an invitation to taste, to feel, to savor.
                            </Typography>

                            {/* Call to Action Buttons */}
                            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: '#5C3824',
                                        py: 1.5,
                                        px: 4,
                                        borderRadius: '4px',
                                        textTransform: 'none',
                                        '&:hover': {
                                            bgcolor: '#4A2C1C',
                                        }
                                    }}
                                >
                                    Order Now
                                </Button>

                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: '#5C3824',
                                        borderColor: '#5C3824',
                                        py: 1.5,
                                        px: 4,
                                        borderRadius: '4px',
                                        textTransform: 'none',
                                        '&:hover': {
                                            bgcolor: 'rgba(92, 56, 36, 0.08)',
                                            borderColor: '#5C3824',
                                        }
                                    }}
                                >
                                    Join Our Bean Club
                                </Button>
                            </Box>

                            {/* Customer Testimonials Preview */}
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                                <AvatarGroup max={4} sx={{ '& .MuiAvatar-root': { width: 36, height: 36, border: '2px solid white' } }}>
                                    {[1, 2, 3, 4].map((id) => (
                                        <Avatar key={id} alt={`Customer ${id}`} src={`/avatar-${id}.jpg`} />
                                    ))}
                                </AvatarGroup>
                                <Box sx={{ ml: 2 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#1A0F00' }}>
                                        +40
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#5C3824' }}>
                                        Happy customers recommends us!
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Best Selling Products */}
                            <Box>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 600,
                                        color: '#1A0F00',
                                        mb: 2
                                    }}
                                >
                                    Best Selling
                                </Typography>

                                <Grid container spacing={2}>
                                    {bestSellers.map((product, index) => (
                                        <Grid item xs={4} sm={4} md={4} key={index}>
                                            <Paper
                                                elevation={0}
                                                sx={{
                                                    bgcolor: '#F2E5D7',
                                                    borderRadius: '12px',
                                                    overflow: 'hidden',
                                                    p: 2,
                                                    height: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    cursor: 'pointer',
                                                    transition: 'transform 0.3s',
                                                    '&:hover': {
                                                        transform: 'translateY(-5px)',
                                                    }
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={product.image}
                                                    alt={product.name}
                                                    sx={{
                                                        width: '100%',
                                                        height: 'auto',
                                                        objectFit: 'contain',
                                                        mb: 1.5
                                                    }}
                                                />
                                                <Typography
                                                    variant="subtitle2"
                                                    sx={{
                                                        fontWeight: 600,
                                                        color: '#1A0F00',
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    {product.name}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: '#5C3824',
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    {product.price}
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right Column - Coffee Cup Image */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                position: 'relative'
                            }}
                        >
                            <Box
                                component="img"
                                src="https://coffeebean.com.au/cdn/shop/articles/nathan-dumlao-6VhPY27jdps-unsplash_1600x.jpg?v=1670108329"
                                alt="Coffee cup with splash"
                                sx={{
                                    maxWidth: '100%',
                                    maxHeight: '600px',
                                    transform: { xs: 'scale(0.9)', md: 'scale(1.1)' },
                                    mt: { xs: -4, md: 0 }
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>

                {/* Section Divider */}
                <Box 
                    sx={{ 
                        width: '100%',
                        height: '1px',
                        bgcolor: 'rgba(92, 56, 36, 0.08)',
                        my: 4
                    }}
                />

                {/* About Section */}
                <Box 
                    id="about-section"
                    ref={aboutSectionRef}
                    sx={{ 
                        scrollMarginTop: '80px',
                        mb: 6
                    }}
                >
                    {/* <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                            fontWeight: 600,
                            color: '#1A0F00',
                            mb: 3,
                            textAlign: 'center'
                        }}
                    >
                        About Us
                    </Typography> */}

                    <Box 
                        sx={{ 
                            backgroundColor: '#FFF5EE',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.04)'
                        }}
                    >
                        <CoffeeShopLanding />
                    </Box>
                </Box>
                
                {/* Coffee Menu Section */}
                <Box 
                    id="menu-section"
                    sx={{ 
                        scrollMarginTop: '80px',
                        mb: 6
                    }}
                >
                    <CoffeeMenu />
                </Box>
                
                {/* Blog Section */}
                <Box 
                    id="blog-section"
                    ref={blogSectionRef}
                    sx={{ 
                        scrollMarginTop: '80px',
                        mb: 6
                    }}
                >
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                            color: '#1A0F00',
                            mb: 2,
                            textAlign: 'center',

                            fontWeight: 700,
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            lineHeight: 1.2
                        }}
                    >
                       Story In Our
                    </Typography>

                    <Box 
                        sx={{ 
                            backgroundColor: '#FFF5EE',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.04)'
                        }}
                    >
                        <BlogSection />
                    </Box>
                </Box>
                
                {/* Testimonials Section */}
                <Box 
                    id="testimonials-section"
                    ref={testimonialsSectionRef}
                    sx={{ 
                        scrollMarginTop: '80px',
                        mb: 0
                    }}
                >
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                            fontWeight: 600,
                            color: '#1A0F00',
                            textAlign: 'center',

                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            lineHeight: 1.2,
                            mb: 2
                        }}
                    >
                        What Our Buyers Say
                    </Typography>

                    <Box 
                        sx={{ 
                            backgroundColor: '#FFF5EE',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.04)'
                        }}
                    >
                        <Comments />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Home;