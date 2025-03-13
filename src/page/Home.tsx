import React, { useEffect, useRef, useState } from 'react';
import {
    Typography,
    Button,
    Box,
    Container,
    Grid,
    Paper,
    Avatar,
    AvatarGroup,
    Fab,
    Zoom,
    Fade,
    Slide,
    Grow,
    CircularProgress
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CoffeeShopLanding from './About';
import CoffeeMenu from './CoffeeMenu';
import Comments from './Comments';
import BlogSection from './Blog';
import { useInView } from 'react-intersection-observer'; // Add this import

// Coffee product type
interface CoffeeProduct {
    name: string;
    price: string;
    image: string;
}

// Custom hook for scroll animations
const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
    const [ref, inView] = useInView({
        threshold,
        triggerOnce,
    });
    return [ref, inView];
};

const Home: React.FC = () => {
    const aboutSectionRef = useRef<HTMLDivElement>(null);
    const testimonialsSectionRef = useRef<HTMLDivElement>(null);
    const blogSectionRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [pageLoaded, setPageLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // New state for loading screen
    
    // Animation refs using custom hook
    const [heroTextRef, heroTextInView] = useScrollAnimation();
    const [heroImageRef, heroImageInView] = useScrollAnimation();
    const [bestSellersRef, bestSellersInView] = useScrollAnimation();
    const [aboutRef, aboutInView] = useScrollAnimation();
    const [menuRef, menuInView] = useScrollAnimation();
    const [blogRef, blogInView] = useScrollAnimation();
    const [testimonialsRef, testimonialsInView] = useScrollAnimation();
    
    // Trigger initial animations and handle loading effect
    useEffect(() => {
        // Simulate loading time
        const loadingTimer = setTimeout(() => {
            setIsLoading(false);
            // Set pageLoaded after the loading animation completes
            setTimeout(() => {
                setPageLoaded(true);
            }, 500);
        }, 2000); // 2 seconds loading time
        
        return () => clearTimeout(loadingTimer);
    }, []);
    
    // Control scroll to top button visibility
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setShowScrollTop(scrollY > 300);
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    // Best selling products
    const bestSellers: CoffeeProduct[] = [
        {
            name: 'Caffè Latte',
            price: 'GHS 32.99',
            image: 'https://www.acouplecooks.com/wp-content/uploads/2021/08/Cafe-Au-Lait-001s.jpg'
        },
        {
            name: 'Black Iced Coffee',
            price: 'GHS 15.90',
            image: 'https://media.istockphoto.com/id/1467199060/photo/cup-of-coffee-with-smoke-and-coffee-beans-on-old-wooden-background.jpg?s=612x612&w=0&k=20&c=OnS8_6FM5ussfSGmjpDD-GofERg2UbItdxShIAA90sQ='
        },
        {
            name: 'Coffee Mocha',
            price: 'GHS 12.99',
            image: 'https://content.api.news/v3/images/bin/534bb0a6aebf6dbc3667094d5a618631'
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
            {/* Loading Overlay */}
            <Fade in={isLoading} timeout={500} unmountOnExit>
                <Box sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: '#FFF5EE',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 9999
                }}>
                    <Box sx={{ 
                        position: 'relative',
                        width: '100px',
                        height: '100px',
                        mb: 3
                    }}>
                        {/* Coffee cup animation */}
                        <Box sx={{ 
                            position: 'absolute',
                            width: '80px',
                            height: '80px',
                            borderRadius: '0 0 40px 40px',
                            backgroundColor: '#5C3824',
                            left: '10px',
                            top: '10px',
                            animation: 'steam 2s infinite'
                        }}>
                            <Box sx={{
                                position: 'absolute',
                                width: '20px',
                                height: '40px',
                                borderRadius: '0 20px 20px 0',
                                backgroundColor: '#5C3824',
                                right: '-20px',
                                top: '15px'
                            }} />
                            {/* Coffee liquid animation */}
                            <Box sx={{
                                position: 'absolute',
                                width: '70px',
                                height: '20px',
                                backgroundColor: '#3A1F0E',
                                left: '5px',
                                top: '15px',
                                borderRadius: '10px',
                                animation: 'fill 2s infinite ease-in-out'
                            }} />
                        </Box>
                    </Box>
                    <Typography variant="h6" sx={{ color: '#5C3824', fontWeight: 600 }}>
                        Brewing your experience...
                    </Typography>
                    <CircularProgress sx={{ mt: 2, color: '#5C3824' }} />
                </Box>
            </Fade>

            {/* Main Content with Fade In Animation */}
            <Fade in={!isLoading} timeout={1000} style={{ transitionDelay: isLoading ? '500ms' : '0ms' }}>
                <Box>
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
                                <Fade in={pageLoaded} timeout={1000}>
                                    <Box ref={heroTextRef} sx={{ position: 'relative', py: { xs: 2, md: 4 } }}>
                                        {/* Floating coffee bean decoration */}
                                    
                                        {/* Heading and Subheading */}
                                        <Slide direction="right" in={pageLoaded} timeout={800}>
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
                                        </Slide>

                                        <Fade in={pageLoaded} timeout={1200} style={{ transitionDelay: '300ms' }}>
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
                                        </Fade>

                                        {/* Call to Action Buttons */}
                                        <Fade in={pageLoaded} timeout={1500} style={{ transitionDelay: '600ms' }}>
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
                                        </Fade>

                                        {/* Customer Testimonials Preview */}
                                        <Fade in={pageLoaded} timeout={1800} style={{ transitionDelay: '900ms' }}>
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
                                        </Fade>

                                        {/* Best Selling Products */}
                                        <Grow in={pageLoaded} timeout={2000} style={{ transitionDelay: '1200ms' }}>
                                            <Box ref={bestSellersRef}>
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
                                                                        height: '120px', // Fixed height for stability
                                                                        objectFit: 'cover', // Changed from 'contain' to 'cover'
                                                                        borderRadius: '8px', // Added border radius
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
                                        </Grow>
                                    </Box>
                                </Fade>
                            </Grid>

                            {/* Right Column - Coffee Cup Image */}
                            <Grid item xs={12} md={6}>
                                <Fade in={pageLoaded} timeout={2000}>
                                    <Box
                                        ref={heroImageRef}
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
                                                height: { xs: '350px', sm: '450px', md: '550px' }, // Responsive fixed height
                                                objectFit: 'cover',
                                                borderRadius: '16px', // Added border radius
                                                boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)', // Added shadow for depth
                                                transform: { xs: 'scale(0.9)', md: 'scale(1.05)' }, // Slightly reduced scale
                                                mt: { xs: -4, md: 0 },
                                                transition: 'transform 0.8s ease-out',
                                                '&:hover': {
                                                    transform: { xs: 'scale(0.95)', md: 'scale(1.08)' },
                                                }
                                            }}
                                        />
                                    </Box>
                                </Fade>
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
                        <Fade in={aboutInView} timeout={1000}>
                            <Box 
                                id="about-section"
                                ref={(el) => {
                                    // Combine the refs
                                    aboutSectionRef.current = el;
                                    // @ts-ignore - We're handling the ref type mismatch
                                    aboutRef(el);
                                }}
                                sx={{ 
                                    scrollMarginTop: '80px',
                                    mb: 6
                                }}
                            >
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
                        </Fade>
                        
                        {/* Coffee Menu Section */}
                        <Fade in={menuInView} timeout={1000}>
                            <Box 
                                id="menu-section"
                                ref={menuRef}
                                sx={{ 
                                    scrollMarginTop: '80px',
                                    mb: 6
                                }}
                            >
                                <CoffeeMenu />
                            </Box>
                        </Fade>
                        
                        {/* Blog Section */}
                        <Fade in={blogInView} timeout={1000}>
                            <Box 
                                id="blog-section"
                                ref={(el) => {
                                    // Combine the refs
                                    blogSectionRef.current = el;
                                    // @ts-ignore - We're handling the ref type mismatch
                                    blogRef(el);
                                }}
                                sx={{ 
                                    scrollMarginTop: '80px',
                                    mb: 6
                                }}
                            >
                                <Slide direction="up" in={blogInView} timeout={800}>
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
                                </Slide>

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
                        </Fade>
                        
                        {/* Testimonials Section */}
                        <Fade in={testimonialsInView} timeout={1000}>
                            <Box 
                                id="testimonials-section"
                                ref={(el) => {
                                    // Combine the refs
                                    testimonialsSectionRef.current = el;
                                    // @ts-ignore - We're handling the ref type mismatch
                                    testimonialsRef(el);
                                }}
                                sx={{ 
                                    scrollMarginTop: '100px', // Increased scroll margin for better offset
                                    mb: 6 // Added bottom margin to create space before footer
                                }}
                            >
                                <Slide direction="up" in={testimonialsInView} timeout={800}>
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
                                </Slide>

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
                        </Fade>
                    </Container>
                    
                    {/* Go to top button */}
                    <Zoom in={showScrollTop}>
                        <Fab 
                            color="secondary"
                            size="medium"
                            aria-label="scroll back to top"
                            onClick={scrollToTop}
                            sx={{
                                position: 'fixed',
                                bottom: 20,
                                right: 20,
                                backgroundColor: '#5C3824',
                                '&:hover': {
                                    backgroundColor: '#4A2C1C',
                                },
                                zIndex: 1000,
                            }}
                        >
                            <KeyboardArrowUpIcon />
                        </Fab>
                    </Zoom>
                </Box>
            </Fade>
            
            {/* Add CSS Animations */}
            <Box
                sx={{
                    '@keyframes steam': {
                        '0%': { transform: 'translateY(0)' },
                        '50%': { transform: 'translateY(-10px)' },
                        '100%': { transform: 'translateY(0)' }
                    },
                    '@keyframes fill': {
                        '0%': { height: '5px', backgroundColor: '#3A1F0E' },
                        '50%': { height: '50px', backgroundColor: '#5D4037' },
                        '100%': { height: '5px', backgroundColor: '#3A1F0E' }
                    }
                }}
            />
        </Box>
    );
};

export default Home;