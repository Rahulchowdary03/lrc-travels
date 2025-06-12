import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import {
  CheckCircle,
  People,
  Tour,
  Star,
  ThumbUp,
  SupportAgent,
} from "@mui/icons-material";

function WhyChooseUs() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const counterAnimation = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { type: "spring", stiffness: 100 }
  };

  return (
    <Box sx={{ 
      background: "linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%)",
      py: 8 
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: "bold",
              mb: 6,
              background: "linear-gradient(45deg, #2196f3, #4caf50)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)"
            }}
          >
            Why Choose Us?
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Paper
                elevation={5}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 4,
                  transition: "all 0.3s ease",
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    backgroundColor: "#e8f5e9",
                    "& .icon": {
                      transform: "scale(1.2)",
                    }
                  },
                }}
              >
                <Box className="icon" sx={{ transition: "transform 0.3s ease" }}>
                  <CheckCircle sx={{ fontSize: 60, color: "#4caf50", mb: 2 }} />
                </Box>
                <Typography variant="h6" gutterBottom>
                  All Over South India
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  We provide tour packages and services all over South India with
                  local expertise.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Paper
                elevation={5}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 4,
                  transition: "all 0.3s ease",
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    backgroundColor: "#e3f2fd",
                    "& .icon": {
                      transform: "scale(1.2)",
                    }
                  },
                }}
              >
                <Box className="icon" sx={{ transition: "transform 0.3s ease" }}>
                  <ThumbUp sx={{ fontSize: 60, color: "#2196f3", mb: 2 }} />
                </Box>
                <Typography variant="h6" gutterBottom>
                  Competitive Pricing
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Get the best travel deals without compromising on quality.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Paper
                elevation={5}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 4,
                  transition: "all 0.3s ease",
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    backgroundColor: "#ffebee",
                    "& .icon": {
                      transform: "scale(1.2)",
                    }
                  },
                }}
              >
                <Box className="icon" sx={{ transition: "transform 0.3s ease" }}>
                  <SupportAgent sx={{ fontSize: 60, color: "#ff5722", mb: 2 }} />
                </Box>
                <Typography variant="h6" gutterBottom>
                  Best Support 24/7
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  We are always available to assist you at any time of the day.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Paper
                elevation={5}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 4,
                  transition: "all 0.3s ease",
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    backgroundColor: "#f3e5f5",
                    "& .icon": {
                      transform: "scale(1.2)",
                    }
                  },
                }}
              >
                <Box className="icon" sx={{ transition: "transform 0.3s ease" }}>
                  <Tour sx={{ fontSize: 60, color: "#9c27b0", mb: 2 }} />
                </Box>
                <Typography variant="h6" gutterBottom>
                  Fast Booking
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Simplified booking processes for hassle-free planning.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Paper
                elevation={5}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 4,
                  transition: "all 0.3s ease",
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    backgroundColor: "#fffde7",
                    "& .icon": {
                      transform: "scale(1.2)",
                    }
                  },
                }}
              >
                <Box className="icon" sx={{ transition: "transform 0.3s ease" }}>
                  <Star sx={{ fontSize: 60, color: "#ffc107", mb: 2 }} />
                </Box>
                <Typography variant="h6" gutterBottom>
                  Our Experience
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Over a decade of experience in providing amazing travel
                  experiences.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Paper
                elevation={5}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 4,
                  transition: "all 0.3s ease",
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    backgroundColor: "#eceff1",
                    "& .icon": {
                      transform: "scale(1.2)",
                    }
                  },
                }}
              >
                <Box className="icon" sx={{ transition: "transform 0.3s ease" }}>
                  <People sx={{ fontSize: 60, color: "#607d8b", mb: 2 }} />
                </Box>
                <Typography variant="h6" gutterBottom>
                  We Are The Best
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Recognized for providing exceptional travel arrangements.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        <Box sx={{ 
          mt: 8, 
          textAlign: "center",
          background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))",
          borderRadius: 4,
          p: 4,
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
        }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Typography variant="h4" gutterBottom sx={{ 
              fontWeight: "bold",
              background: "linear-gradient(45deg, #2196f3, #4caf50)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}>
              Our Achievements
            </Typography>
            <Grid container spacing={4} sx={{ mt: 4 }}>
              <Grid item xs={12} sm={4}>
                <motion.div
                  variants={counterAnimation}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "bold",
                      background: "linear-gradient(45deg, #4caf50, #2196f3)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    500+
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: "#666",
                      mt: 1 
                    }}
                  >
                    Happy Customers
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <motion.div
                  variants={counterAnimation}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "bold",
                      background: "linear-gradient(45deg, #2196f3, #4caf50)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    1.5K+
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: "#666",
                      mt: 1 
                    }}
                  >
                    Tours Success
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <motion.div
                  variants={counterAnimation}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "bold",
                      background: "linear-gradient(45deg, #ff5722, #ff9800)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    99%
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: "#666",
                      mt: 1 
                    }}
                  >
                    Positive Reviews
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ 
            mt: 6, 
            textAlign: "center",
            p: 4,
            borderRadius: 4,
            background: "linear-gradient(135deg, #fff9c4, #ffecb3)",
          }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ 
                fontWeight: "bold",
                color: "#ff9800",
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)"
              }}
            >
              Excellent!
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: "#666",
                fontWeight: "medium" 
              }}
            >
              5.0 Rating out of 5.0 based on 354 reviews
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default WhyChooseUs;
