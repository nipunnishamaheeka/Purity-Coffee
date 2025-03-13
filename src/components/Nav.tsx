import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate, useLocation} from "react-router-dom";

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import GrainIcon from '@mui/icons-material/Grain';
// Custom theme for coffee shop color scheme
const theme = createTheme({
    palette: {
        primary: {
            main: '#fff8f1', // Light cream background
            contrastText: '#4a2c2a', // Dark coffee color for text
        },
        secondary: {
            main: '#4a2c2a', // Dark coffee color
            contrastText: '#ffffff',
        },
    },
    typography: {
        fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
        button: {
            textTransform: 'none',
            fontWeight: 500,
        },
    },
});

const pages = ['Home', 'About', 'Products', 'Blog', 'Reviews', 'Contact'];

function CoffeeShopNavbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [activePage, setActivePage] = React.useState('Home');

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleMenuClick = (page: string) => {
        setActivePage(page);
        console.log(`${page} clicked`);
        
        // Special handling for About, Reviews, and Products
        if (page.toLowerCase() === 'about') {
            if (location.pathname === '/') {
                // If on home page, scroll to About section
                const aboutSection = document.getElementById('about-section');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // If not on home page, navigate to home page with hash
                navigate('/#about-section');
            }
        } else if (page.toLowerCase() === 'reviews') {
            if (location.pathname === '/') {
                // If on home page, scroll to Testimonials section
                const testimonialSection = document.getElementById('testimonials-section');
                if (testimonialSection) {
                    testimonialSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // If not on home page, navigate to home page with hash
                navigate('/#testimonials-section');
            }
        } else if (page.toLowerCase() === 'products') {
            if (location.pathname === '/') {
                // If on home page, scroll to Products section
                const productsSection = document.getElementById('products-section');
                if (productsSection) {
                    productsSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // If not on home page, navigate to home page with hash
                navigate('/#products-section');
            }
        } else {
            // Handle other pages normally
            let path;
            if (page.toLowerCase() === 'home') {
                path = '/';
            } else {
                path = `/${page.toLowerCase()}`;
            }
            
            navigate(path);
        }
        
        handleCloseNavMenu();
    };

    // Check if we need to scroll to sections when coming from another page
    React.useEffect(() => {
        if (location.hash === '#about-section') {
            setTimeout(() => {
                const aboutSection = document.getElementById('about-section');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100); // Small delay to ensure the DOM is ready
        } else if (location.hash === '#testimonials-section') {
            setTimeout(() => {
                const testimonialSection = document.getElementById('testimonials-section');
                if (testimonialSection) {
                    testimonialSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else if (location.hash === '#products-section') {
            setTimeout(() => {
                const productsSection = document.getElementById('products-section');
                if (productsSection) {
                    productsSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    return (
        <ThemeProvider theme={theme}>
             <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 4
                }}>
                    {/* Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <GrainIcon sx={{ mr: 1, transform: 'rotate(45deg)', color: '#5C3824' }} />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                fontFamily: 'serif',
                                fontWeight: 600,
                                color: '#5C3824',
                            }}
                        >
                            Bean & Co
                        </Typography>
                    </Box>

                    {/* Navigation Menu */}
                    <Paper
                        elevation={0}
                        sx={{
                            backgroundColor: '#5C3824',
                            borderRadius: '30px',
                            px: 2,
                        }}
                    >
                        <Toolbar disableGutters variant="dense">
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={() => handleMenuClick(page)}
                                    sx={{
                                        color: 'white',
                                        mx: 1,
                                        fontSize: '0.9rem',
                                        textTransform: 'none',
                                        fontWeight: activePage === page ? 600 : 400,
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Toolbar>
                    </Paper>

                    {/* Right-side Icons & Login */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton size="large" sx={{ color: '#5C3824' }}>
                            <SearchIcon />
                        </IconButton>
                        <IconButton size="large" sx={{ color: '#5C3824' }}>
                            <ShoppingBagOutlinedIcon />
                        </IconButton>
                        <Button
                            variant="contained"
                            sx={{
                                ml: 2,
                                bgcolor: '#5C3824',
                                borderRadius: '8px',
                                textTransform: 'none',
                                '&:hover': {
                                    bgcolor: '#4A2C1C',
                                }
                            }}
                        >
                            Login
                        </Button>
                    </Box>
                </Box>

            {/* Removing the duplicate AppBar since we already have a navigation bar above */}
        </ThemeProvider>
    );
}

export default CoffeeShopNavbar;