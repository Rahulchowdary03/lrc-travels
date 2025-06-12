import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import { keyframes } from "@mui/system";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const vibrate = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`;

const PersistentIcons = () => {
  const whatsappLink = "https://wa.me/919876543210"; // Replace with your WhatsApp number
  const callNowLink = "tel:+919876543210"; // Replace with your phone number

  return (
    <Box>
      {/* WhatsApp Icon - Left */}
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          left: 20,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          animation: `${pulse} 2s infinite`,
        }}
      >
        <IconButton
          sx={{
            backgroundColor: "#25D366",
            color: "white",
            "&:hover": { backgroundColor: "#1DA851" },
            boxShadow: 3,
          }}
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* Call Now Icon - Right */}
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            animation: `${vibrate} 2s infinite`,
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "#007bff",
              color: "white",
              "&:hover": { backgroundColor: "#0056b3" },
              boxShadow: 3,
            }}
            href={callNowLink}
          >
            <PhoneIcon fontSize="large" />
          </IconButton>
          <Box
            sx={{
              backgroundColor: "white",
              color: "black",
              padding: "5px 10px",
              borderRadius: "5px",
              marginTop: "5px",
              boxShadow: 2,
              fontWeight: "bold",
            }}
          >
            <Typography variant="caption">Call Now</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PersistentIcons;
