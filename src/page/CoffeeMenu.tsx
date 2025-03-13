import React, { useState, useRef, useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Chip,
    IconButton,
    Grid,
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface CoffeeItem {
    id: number;
    name: string;
    type: string;
    image: string;
    rating: number;
    reviews: number;
    description: string;
    price: number;
}

const CoffeeMenu: React.FC = () => {
    const [selectedType, setSelectedType] = useState<string>('Latte');
    const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const displayedCards = 4; // Number of cards to display at once
    const cardWidth = 25; // Card width as percentage (25% = 4 cards per view)

    // Coffee data
    const coffeeItems: CoffeeItem[] = [
        {
            id: 1,
            name: 'Chocolate Latte',
            type: 'Latte',
            image: 'https://www.datocms-assets.com/20941/1663775498-best-coffee-drinks-red-eye-coffee.png?auto=compress&fm=jpg&w=850',
            rating: 4.9,
            reviews: 360,
            description: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
            price: 1.9
        },
        {
            id: 2,
            name: 'Mocha Latte',
            type: 'Latte',
            image: 'https://l.icdbcdn.com/oh/53d6fac5-34ae-48dc-9783-79852170b41d.jpg?w=1040',
            rating: 5.0,
            reviews: 180,
            description: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
            price: 2.2
        },
        {
            id: 3,
            name: 'Coffee Latte',
            type: 'Latte',
            image: 'https://vaya.in/recipes/wp-content/uploads/2018/05/Coffee.jpg',
            rating: 4.4,
            reviews: 450,
            description: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
            price: 2.5
        },
        {
            id: 4,
            name: 'Hazelnut Latte',
            type: 'Latte',
            image: 'https://www.datocms-assets.com/20941/1663775498-best-coffee-drinks-red-eye-coffee.png?auto=compress&fm=jpg&w=850',
            rating: 4.7,
            reviews: 390,
            description: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
            price: 2.3
        },
        {
            id: 4,
            name: 'Hazelnut Latte',
            type: 'Latte',
            image: 'https://www.datocms-assets.com/20941/1663775498-best-coffee-drinks-red-eye-coffee.png?auto=compress&fm=jpg&w=850',
            rating: 4.7,
            reviews: 390,
            description: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
            price: 2.3
        },
        {
            id: 4,
            name: 'Hazelnut Latte',
            type: 'Latte',
            image: 'https://www.datocms-assets.com/20941/1663775498-best-coffee-drinks-red-eye-coffee.png?auto=compress&fm=jpg&w=850',
            rating: 4.7,
            reviews: 390,
            description: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
            price: 2.3
        },     {
            id: 4,
            name: 'Hazelnut Latte',
            type: 'Latte',
            image: 'https://www.datocms-assets.com/20941/1663775498-best-coffee-drinks-red-eye-coffee.png?auto=compress&fm=jpg&w=850',
            rating: 4.7,
            reviews: 390,
            description: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
            price: 2.3
        },     {
            id: 4,
            name: 'Hazelnut Latte',
            type: 'Latte',
            image: 'https://www.datocms-assets.com/20941/1663775498-best-coffee-drinks-red-eye-coffee.png?auto=compress&fm=jpg&w=850',
            rating: 4.7,
            reviews: 390,
            description: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
            price: 2.3
        },
        {
            id: 4,
            name: 'Hazelnut Latte',
            type: 'Latte',
            image: 'https://www.datocms-assets.com/20941/1663775498-best-coffee-drinks-red-eye-coffee.png?auto=compress&fm=jpg&w=850',
            rating: 4.7,
            reviews: 390,
            description: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
            price: 2.3
        },
        // Add more items for other types
        {
            id: 5,
            name: 'Classic Robusta',
            type: 'Robusta',
            image: '/api/placeholder/300/200',
            rating: 4.5,
            reviews: 210,
            description: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
            price: 2.0
        },
        {
            id: 6,
            name: 'Arabica Pour Over',
            type: 'Acaibica',
            image: '/api/placeholder/300/200',
            rating: 4.8,
            reviews: 275,
            description: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
            price: 2.4
        }
    ];

    // Filter coffee by selected type
    const filteredCoffee = coffeeItems.filter(coffee => coffee.type === selectedType);

    // Reset current card index when coffee type changes
    useEffect(() => {
        setCurrentCardIndex(0);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = 0;
        }
    }, [selectedType]);

    // Handle scroll to specific card
    const scrollToCard = (index: number) => {
        if (scrollContainerRef.current && index >= 0 && index < filteredCoffee.length) {
            setCurrentCardIndex(index);
            const containerWidth = scrollContainerRef.current.clientWidth;
            const cardPixelWidth = containerWidth * (cardWidth / 100);
            scrollContainerRef.current.scrollTo({
                left: index * cardPixelWidth,
                behavior: 'smooth'
            });
        }
    };

    // Handle next card
    const handleNextCard = () => {
        scrollToCard(Math.min(currentCardIndex + 1, filteredCoffee.length - 1));
    };

    // Handle previous card
    const handlePrevCard = () => {
        scrollToCard(Math.max(currentCardIndex - 1, 0));
    };

    // Handle scroll end detection
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const containerWidth = scrollContainerRef.current.clientWidth;
            const cardPixelWidth = containerWidth * (cardWidth / 100);
            const newIndex = Math.round(scrollLeft / cardPixelWidth);
            
            if (newIndex !== currentCardIndex) {
                setCurrentCardIndex(newIndex);
            }
        }
    };

    // Coffee types for filter chips
    const coffeeTypes = ['Latte', 'Robusta', 'Acaibica'];

    return (
        <Box 
            id="products-section"
            sx={{
                backgroundColor: '#f9f5f0',
                borderRadius: '16px', // Added border radius for consistency
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.04)', // Added shadow for consistency
                py: { xs: 2, md: 3 }, // Reduced from py: { xs: 3, md: 5 } to reduce top padding
                px: { xs: 1, md: 2 } // Added horizontal padding
            }}
        >
            <Container maxWidth="lg">
                {/* Heading */}
                <Typography
                    variant="h3"
                    component="h2" // Changed to h2 for proper document outline
                    align="center"
                    sx={{
                        mb: 4, // Reduced from mb: 6
                        fontWeight: 500,
                        color: '#333',
                        px: 2
                    }}
                >
                    In ZARA you can create your own cafe
                </Typography>

                {/* Filter buttons */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 5,
                        gap: 2
                    }}
                >
                    {coffeeTypes.map(type => (
                        <Chip
                            key={type}
                            label={type}
                            onClick={() => setSelectedType(type)}
                            sx={{
                                px: 3,
                                py: 2.5,
                                borderRadius: '30px',
                                backgroundColor: selectedType === type ? '#fff' : 'transparent',
                                boxShadow: selectedType === type ? '0px 2px 6px rgba(0,0,0,0.08)' : 'none',
                                '&:hover': {
                                    backgroundColor: selectedType === type ? '#fff' : '#f0e9e0',
                                },
                                fontSize: '1rem',
                                fontWeight: 500,
                                color: '#555'
                            }}
                        />
                    ))}
                </Box>

                {/* Display four cards with horizontal swipe */}
                <Box sx={{ position: 'relative', my: 4 }}>
                    {/* Prev button (left) */}
                    <IconButton 
                        onClick={handlePrevCard}
                        disabled={currentCardIndex === 0}
                        sx={{
                            position: 'absolute',
                            left: { xs: '-5px', md: '-20px' },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'white',
                            boxShadow: '0px 2px 6px rgba(0,0,0,0.1)',
                            zIndex: 2,
                            opacity: currentCardIndex === 0 ? 0.5 : 1,
                            '&:hover': {
                                backgroundColor: 'white',
                            }
                        }}
                    >
                        {/*<ArrowBackIosNewIcon fontSize="small" />*/}
                    </IconButton>

                    {/* Fixed container for all cards */}
                    <Box sx={{ 
                        overflow: 'hidden', 
                        position: 'relative',
                        mx: 'auto',
                        height: 'auto' // Ensure height is based on content
                    }}>
                        {/* Grid to show exactly 4 cards at once */}
                        <Grid container spacing={2} sx={{ mb: 2, display: 'none' }}>
                            {[...Array(displayedCards)].map((_, i) => (
                                <Grid item xs={12/displayedCards} key={`grid-${i}`}>
                                    <Box sx={{ height: 1 }} />
                                </Grid>
                            ))}
                        </Grid>

                        {/* Scrollable container with all cards */}
                        <Box
                            ref={scrollContainerRef}
                            sx={{
                                display: 'flex',
                                overflowX: 'auto',
                                overflowY: 'hidden', // Explicitly prevent vertical scrolling
                                scrollSnapType: 'x mandatory',
                                position: 'relative', // Changed from absolute positioning
                                scrollbarWidth: 'none', // Hide scrollbar for Firefox
                                msOverflowStyle: 'none', // Hide scrollbar for IE
                                '&::-webkit-scrollbar': { // Hide scrollbar for Chrome/Safari
                                    display: 'none',
                                },
                                py: 1, // Add padding to prevent content cut-off
                            }}
                            onScroll={handleScroll}
                        >
                            {filteredCoffee.map((coffee) => (
                                <Box
                                    key={coffee.id}
                                    sx={{
                                        flexShrink: 0,
                                        width: '25%', // 4 cards per view (4 × 25% = 100%)
                                        scrollSnapAlign: 'start',
                                        px: 1,
                                        height: 'auto', // Let height be determined by content
                                    }}
                                >
                                    <Card
                                        sx={{
                                            borderRadius: 4,
                                            boxShadow: '0px 4px 12px rgba(0,0,0,0.05)',
                                            backgroundColor: 'white',
                                            overflow: 'visible',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                        elevation={0}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={coffee.image}
                                            alt={coffee.name}
                                            sx={{
                                                height: 140,
                                                borderTopLeftRadius: 16,
                                                borderTopRightRadius: 16
                                            }}
                                        />
                                        <CardContent sx={{ p: 2, flexGrow: 1 }}>
                                            <Typography
                                                variant="h6"
                                                component="div"
                                                sx={{ 
                                                    fontWeight: 600, 
                                                    mb: 1,
                                                    fontSize: '1rem'
                                                }}
                                            >
                                                {coffee.name}
                                            </Typography>

                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                                <Box component="span" sx={{ color: '#ffa726', mr: 0.5 }}>★</Box>
                                                <Typography variant="body2" sx={{ fontWeight: 600, mr: 0.5 }}>
                                                    {coffee.rating}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    ({coffee.reviews})
                                                </Typography>
                                            </Box>

                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{ 
                                                    mb: 2,
                                                    display: '-webkit-box',
                                                    overflow: 'hidden',
                                                    WebkitBoxOrient: 'vertical',
                                                    WebkitLineClamp: 2,
                                                }}
                                            >
                                                {coffee.description}
                                            </Typography>

                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                                                <Typography
                                                    variant="h6"
                                                    component="div"
                                                    sx={{ fontWeight: 600 }}
                                                >
                                                    ${coffee.price.toFixed(1)}
                                                </Typography>
                                                <IconButton
                                                    sx={{
                                                        backgroundColor: '#6d2c00',
                                                        color: 'white',
                                                        '&:hover': {
                                                            backgroundColor: '#5d2500',
                                                        }
                                                    }}
                                                    size="small"
                                                >
                                                    {/*<AddIcon />*/}
                                                </IconButton>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    {/* Next button (right) */}
                    <IconButton 
                        onClick={handleNextCard}
                        disabled={currentCardIndex >= filteredCoffee.length - 1}
                        sx={{
                            position: 'absolute',
                            right: { xs: '-5px', md: '-20px' },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'white',
                            boxShadow: '0px 2px 6px rgba(0,0,0,0.1)',
                            zIndex: 2,
                            opacity: currentCardIndex >= filteredCoffee.length - 1 ? 0.5 : 1,
                            '&:hover': {
                                backgroundColor: 'white',
                            }
                        }}
                    >
                        {/*<ArrowForwardIosIcon fontSize="small" />*/}
                    </IconButton>
                </Box>

                {/* Pagination dots */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                    {filteredCoffee.map((_, index) => (
                        <IconButton 
                            key={index} 
                            onClick={() => scrollToCard(index)}
                            size="small"
                            sx={{ p: 0.5 }}
                        >
                            <FiberManualRecordIcon
                                sx={{
                                    fontSize: 12,
                                    color: index === currentCardIndex ? '#6d2c00' : '#d7cec7'
                                }}
                            />
                        </IconButton>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default CoffeeMenu;