import React from "react";
import { Box, Container, Grid, Typography, Paper, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { Flight, LocationOn, EmojiPeople, Explore, FormatQuote, People, Flight as FlightIcon, Place, StarRate } from "@mui/icons-material";
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';
import sarahImage from '../assets/testimonials/sarah.avif';
import michaelImage from '../assets/testimonials/michael.jpg';
import travelVideo from '../assets/about-us-video.mp4';

function AboutUs() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <Box sx={{ 
      background: "linear-gradient(135deg, #f6f9fc 0%, #eef2f7 100%)",
      py: 10,
      overflow: "hidden"
    }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontWeight: 800,
              mb: 3,
              background: "linear-gradient(45deg, #1a237e, #0277bd)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)"
            }}
          >
            Our Journey
          </Typography>
          
          <Typography
            variant="h5"
            align="center"
            sx={{
              color: "#546e7a",
              mb: 8,
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.8
            }}
          >
            Embark on unforgettable adventures with South India's premier travel curator. 
            We transform your travel dreams into extraordinary realities.
          </Typography>
        </motion.div>

        {/* Feature Cards */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {[
            {
              icon: <Explore sx={{ fontSize: 45, color: "#1e88e5" }} />,
              title: "Expert Guidance",
              description: "Our seasoned travel experts craft perfect itineraries tailored to your preferences."
            },
            {
              icon: <Flight sx={{ fontSize: 45, color: "#43a047" }} />,
              title: "Seamless Experience",
              description: "From booking to return, enjoy stress-free travel planning and execution."
            },
            {
              icon: <LocationOn sx={{ fontSize: 45, color: "#e53935" }} />,
              title: "Hidden Gems",
              description: "Discover secret locations and authentic experiences off the beaten path."
            },
            {
              icon: <EmojiPeople sx={{ fontSize: 45, color: "#fb8c00" }} />,
              title: "Local Connect",
              description: "Immerse yourself in local culture with our network of trusted partners."
            }
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    textAlign: "center",
                    borderRadius: 4,
                    background: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                      "& .icon": {
                        transform: "scale(1.2) rotate(10deg)",
                      }
                    },
                  }}
                >
                  <Box className="icon" sx={{ mb: 2, transition: "transform 0.3s ease" }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              position: "relative",
              p: 6,
              borderRadius: 4,
              background: "linear-gradient(135deg, rgba(25,118,210,0.1), rgba(66,165,245,0.1))",
              backdropFilter: "blur(10px)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "#1976d2",
                textAlign: "center",
                mb: 4
              }}
            >
              Our Story
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#37474f",
                lineHeight: 2,
                textAlign: "center",
                maxWidth: "900px",
                mx: "auto"
              }}
            >
              Since our inception, we've been dedicated to creating extraordinary travel experiences 
              across South India. Our passion for travel, coupled with deep local knowledge, 
              enables us to offer unique perspectives on well-known destinations and uncover 
              hidden treasures that most travelers miss. We believe in sustainable tourism and 
              work closely with local communities to ensure our travels benefit everyone involved.
            </Typography>
          </Box>
        </motion.div>

        {/* Statistics Section */}
        <Box sx={{ my: 8 }}>
          <Grid container spacing={4}>
            {[
              { icon: <People />, count: 50000, label: "Happy Travelers" },
              { icon: <FlightIcon />, count: 1000, label: "Tours Completed" },
              { icon: <Place />, count: 100, label: "Destinations" },
              { icon: <StarRate />, count: 95, label: "5-Star Reviews %" }
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Paper
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      background: 'rgba(255,255,255,0.9)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    {stat.icon}
                    <Typography variant="h4" sx={{ my: 2, fontWeight: 'bold' }}>
                      <CountUp end={stat.count} duration={2.5} />
                      {stat.label.includes('%') ? '%' : ''}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Testimonials Section */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h3" align="center" sx={{ mb: 6 }}>
            What Our Travelers Say
          </Typography>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="testimonialSwiper"
          >
            {[
               {
                name: "Sarah Johnson",
                location: "Kerala Backwaters Tour",
                image: sarahImage,
                text: "An unforgettable experience through Kerala's backwaters. The team's attention to detail was impressive!"
              },
              {
                name: "Michael Chen",
                location: "Mysore Heritage Tour",
                image: michaelImage,
                text: "The heritage tour exceeded all expectations. Our guide's knowledge was exceptional!"
              },
              // Add more testimonials...
            ].map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Paper
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    background: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar
                      src={testimonial.image}
                      sx={{ width: 60, height: 60, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="h6">{testimonial.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.location}
                      </Typography>
                    </Box>
                  </Box>
                  <FormatQuote sx={{ fontSize: 40, color: 'primary.main', opacity: 0.3 }} />
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {testimonial.text}
                  </Typography>
                </Paper>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* Destination Showcase */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h3" align="center" sx={{ mb: 6 }}>
            Popular Destinations
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                title: "Kerala Backwaters",
                image: `${process.env.PUBLIC_URL}/tour-images/ooty.png`,
                description: "Serene waterways and houseboats"
              },
              {
                title: "Hampi Ruins",
                image: `${process.env.PUBLIC_URL}/tour-images/Hampi.jpg`,
                description: "Ancient architectural marvels"
              }
              ,
              {
                title: "Mysore Palace",
                image: `${process.env.PUBLIC_URL}/tour-images/Mysore.jpg`,
                description: "Royal heritage and culture"
              },
              // Add more destinations...
            ].map((destination, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Paper
                    sx={{
                      position: 'relative',
                      height: 300,
                      overflow: 'hidden',
                      borderRadius: 4,
                    }}
                  >
                    <Box
                      component="img"
                      src={destination.image}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        p: 2,
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                        color: 'white',
                      }}
                    >
                      <Typography variant="h5">{destination.title}</Typography>
                      <Typography variant="body2">{destination.description}</Typography>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Video Showcase */}
        <Box sx={{ my: 8, position: 'relative' }}>
          <Typography variant="h3" align="center" sx={{ mb: 6 }}>
            Experience the Journey
          </Typography>
          <Paper
            sx={{
              position: 'relative',
              paddingTop: '56.25%', // 16:9 aspect ratio
              overflow: 'hidden',
              borderRadius: 4,
            }}
          >
            <video
              src={travelVideo}
              title="Travel Highlights"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              controls
              autoPlay
              muted
              loop
            />
          </Paper>
        </Box>

       
      </Container>
    </Box>
  );
}

export default AboutUs;
