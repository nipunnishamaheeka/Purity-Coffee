import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Avatar, 
  Grid, 
  Rating, 
  Container
} from '@mui/material';

interface TestimonialProps {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

const testimonialData: TestimonialProps[] = [
  {
    name: 'jan manWong',
    rating: 5,
    comment: 'The atmosphere of the cafe was great. Everything was wonderful and I am grateful to all the staff. I made my own coffee and it was delicious',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'mari song',
    rating: 4,
    comment: 'I celebrated my birthday at Zara and they had very delicious drinks. The environment was great and full of kind people. Thank you for your interesting idea',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'zahra khalifeh',
    rating: 5,
    comment: 'Thank you so much. Everything was great. I ordered a latte, which was slightly sweetened and much to my liking. I came with my children for a very good environment',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
];

const TestimonialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}> {/* Adjusted padding */}
      <Box textAlign="center" mb={4}> {/* Reduced from mb={6} */}
        {/* <Typography variant="overline" component="div" color="text.secondary">
          Testimonial
        </Typography> */}
        {/* <Typography variant="h4" component="h2" fontWeight="medium" color='primary.main'>
          What our buyers say
        </Typography> */}
      </Box>

      <Grid container spacing={4}>
        {testimonialData.map((testimonial, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card 
              elevation={0} 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                borderRadius: 2
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    sx={{ width: 56, height: 56, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle1" component="div" fontWeight="medium">
                      {testimonial.name}
                    </Typography>
                    <Rating 
                      value={testimonial.rating} 
                      size="small" 
                      readOnly 
                      sx={{ color: '#FFC107' }}
                    />
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {testimonial.comment}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" mt={3}> {/* Reduced from mt={4} */}
        {testimonialData.map((_, index) => (
          <Box
            key={index}
            component="span"
            onClick={() => setActiveIndex(index)}
            sx={{
              width: index === activeIndex ? 20 : 8,
              height: 8,
              borderRadius: 4,
              mx: 0.5,
              bgcolor: index === activeIndex ? 'primary.main' : 'grey.300',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </Box>
    </Container>
  );
};

export default TestimonialSection;