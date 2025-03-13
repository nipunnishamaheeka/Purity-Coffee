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

const pages = ['Home', 'About', 'Products', 'Blog', 'Reviews'];

function CoffeeShopNavbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [activePage, setActivePage] = React.useState('Home');
    const [scrolled, setScrolled] = React.useState(false);
    const [visible, setVisible] = React.useState(true);
    const lastScrollY = React.useRef(0);

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            
            if (currentScrollY > lastScrollY.current + 10) {
                setVisible(false);
            } else if (currentScrollY < lastScrollY.current - 10) {
                setVisible(true);
            }
            
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
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

    const scrollToElement = (elementId: string) => {
        setTimeout(() => {
            const element = document.getElementById(elementId);
            if (element) {
                // Calculate position with offset for fixed navbar
                const navbarHeight = 80; // Height of your navbar
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - navbarHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
    };
    
    const handleMenuClick = (page: string) => {
        setActivePage(page);
        
        if (page.toLowerCase() === 'about') {
            if (location.pathname === '/') {
                scrollToElement('about-section');
            } else {
                navigate('/#about-section');
            }
        } else if (page.toLowerCase() === 'reviews') {
            if (location.pathname === '/') {
                scrollToElement('testimonials-section');
            } else {
                navigate('/#testimonials-section');
            }
        } else if (page.toLowerCase() === 'products') {
            if (location.pathname === '/') {
                scrollToElement('menu-section');
            } else {
                navigate('/#menu-section');
            }
        } else if (page.toLowerCase() === 'blog') {
            if (location.pathname === '/') {
                scrollToElement('blog-section');
            } else {
                navigate('/#blog-section');
            }
        } else {
            if (page.toLowerCase() === 'home') {
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                navigate(`/${page.toLowerCase()}`);
            }
        }
        
        handleCloseNavMenu();
    };

    React.useEffect(() => {
        // Handle direct URL navigation with hash
        if (location.hash) {
            const elementId = location.hash.substring(1); // Remove the # character
            setTimeout(() => {
                const element = document.getElementById(elementId);
                if (element) {
                    const navbarHeight = 80;
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - navbarHeight;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        }
        
        // Set active page based on URL
        const pathname = location.pathname;
        if (pathname === '/') {
            setActivePage('Home');
        } else if (pathname.includes('about')) {
            setActivePage('About');
        } else if (pathname.includes('products')) {
            setActivePage('Products');
        } else if (pathname.includes('blog')) {
            setActivePage('Blog');
        } else if (pathname.includes('reviews')) {
            setActivePage('Reviews');
        }
    }, [location]);

    return (
        <ThemeProvider theme={theme}>
             <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
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
                    transform: visible ? 'translateY(0)' : 'translateY(-100%)',
                }}
             > 
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
                
               <Box sx={{ height: '80px', mb: 0 }} /> 
            </ThemeProvider>
    );
}

export default CoffeeShopNavbar;