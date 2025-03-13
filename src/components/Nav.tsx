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
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleMenuClick = (page: string) => {
        setActivePage(page);
        console.log(`${page} clicked`);
        
        if (page.toLowerCase() === 'about') {
            if (location.pathname === '/') {
                const aboutSection = document.getElementById('about-section');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                navigate('/#about-section');
            }
        } else if (page.toLowerCase() === 'reviews') {
            if (location.pathname === '/') {
                const testimonialSection = document.getElementById('testimonials-section');
                if (testimonialSection) {
                    testimonialSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                navigate('/#testimonials-section');
            }
        } else if (page.toLowerCase() === 'products') {
            if (location.pathname === '/') {
                const productsSection = document.getElementById('products-section');
                if (productsSection) {
                    productsSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                navigate('/#products-section');
            }
        } else {
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

    React.useEffect(() => {
        if (location.hash === '#about-section') {
            setTimeout(() => {
                const aboutSection = document.getElementById('about-section');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
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
                    mb: 4,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1100,
                    backgroundColor: scrolled ? 'rgba(255, 248, 241, 0.95)' : 'transparent',
                    boxShadow: scrolled ? '0px 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
                    transition: 'all 0.3s ease',
                    padding: '10px 20px',
                    backdropFilter: scrolled ? 'blur(5px)' : 'none',
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
                           Purity Coffee
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
                        {/* <Button
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
                        </Button> */}
                    </Box>
                </Box>
                
               <Box sx={{ height: '80px' }} /> 
            </ThemeProvider>
    );
}

export default CoffeeShopNavbar;