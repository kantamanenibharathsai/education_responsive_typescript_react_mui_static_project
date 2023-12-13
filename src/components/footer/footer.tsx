import { Component } from "react";
import { Box, Typography } from "@mui/material";
import footerStyles from "./footer.styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from '@mui/icons-material/Send';

class Footer extends Component {
  render() {
    return (
      <Box sx={footerStyles.footerContainer}>
        <Box sx={footerStyles.footerChildContainer}>
          <Box sx={footerStyles.footerChildContainer1}>
            <Typography component="h2" sx={footerStyles.upskillText}>
              Upskill
            </Typography>
            <Typography component="p" sx={footerStyles.paraText}>
              A best and cheapest way of getting know learning
            </Typography>
            <Typography component="p" sx={footerStyles.textSubscribe}>
              Subscribe Newsletter
            </Typography>
            <Box sx={footerStyles.inputContainer}>
              <Box
                component="input"
                placeholder="Enter email here"
                sx={footerStyles.inputEl}
                type="email"
              />
              <Box sx={footerStyles.boxIcon}><SendIcon sx={{fontSize: "20px"}}/></Box>
            </Box>
          </Box>
          <Box sx={footerStyles.footerChildWrapper}>
            <Box sx={footerStyles.footerChildContainer2}>
              <Box>
                <Typography component="h2" sx={footerStyles.text1}>
                  Information
                </Typography>
                <Typography
                  component="p"
                  sx={{ ...footerStyles.text2, marginBottom: "4px" }}
                >
                  Home
                </Typography>
                <Typography component="p" sx={footerStyles.text2}>
                  About
                </Typography>
              </Box>
              <Box>
                <Typography
                  component="h2"
                  sx={{ ...footerStyles.text1, marginTop: "9px" }}
                >
                  Courses
                </Typography>
                <Typography
                  component="p"
                  sx={{ ...footerStyles.text2, marginBottom: "4px" }}
                >
                  New
                </Typography>
                <Typography component="p" sx={footerStyles.text2}>
                  Popular
                </Typography>
              </Box>
            </Box>
            <Box sx={footerStyles.footerChildContainer2}>
              <Box>
                <Typography component="h2" sx={footerStyles.text1}>
                  Helpful Links
                </Typography>
                <Typography
                  component="p"
                  sx={{ ...footerStyles.text2, marginBottom: "4px" }}
                >
                  Students
                </Typography>
                <Typography
                  component="p"
                  sx={{ ...footerStyles.text2, marginBottom: "4px" }}
                >
                  Business
                </Typography>
                <Typography component="p" sx={footerStyles.text2}>
                  Instructor
                </Typography>
              </Box>
            </Box>
            <Box sx={footerStyles.footerChildContainer2}>
              <Box>
                <Typography component="h2" sx={footerStyles.text1}>
                  Our Services
                </Typography>
                <Typography
                  component="p"
                  sx={{ ...footerStyles.text2, marginBottom: "4px" }}
                >
                  Design
                </Typography>
                <Typography
                  component="p"
                  sx={{ ...footerStyles.text2, marginBottom: "4px" }}
                >
                  Study
                </Typography>
                <Typography
                  component="p"
                  sx={{ ...footerStyles.text2, marginBottom: "4px" }}
                >
                  Marketing
                </Typography>
                <Typography
                  component="p"
                  sx={{ ...footerStyles.text2, marginBottom: "4px" }}
                >
                  UI/UX
                </Typography>
              </Box>
            </Box>
            <Box sx={footerStyles.footerChildContainer2}>
              <Box>
                <Typography component="h2" sx={footerStyles.text1}>
                  Contact
                </Typography>
                <Typography
                  component="p"
                  sx={{ ...footerStyles.text2, marginBottom: "4px" }}
                >
                  120/7 Section Park, Auckland, New Zealnd
                </Typography>
                <Typography
                  component="p"
                  sx={{ ...footerStyles.text2, marginBottom: "4px" }}
                >
                  email@gmail.com
                </Typography>
                <Typography
                  component="p"
                  sx={{ ...footerStyles.text2, marginBottom: "4px" }}
                >
                  (000)012-345
                </Typography>
                <Box sx={{display: "flex", alignItems: "flex-start", gap: "7px"}}>
                <Typography
                  component="p"
                  sx={{ ...footerStyles.text2, marginBottom: "4px", fontWeight: "600", fontSize: { xs: "16px", sm: "18px" } }}
                >
                  Follow us:
                  </Typography>
                  <Box>
                  <FacebookIcon sx={{ fontSize: {xs:"18px", sm:"24px"}, marginRight: "7px" }} />
                  <TwitterIcon sx={{ fontSize: {xs:"18px", sm:"24px"}, marginRight: "7px" }} />
                  <InstagramIcon sx={{ fontSize: {xs:"18px", sm:"24px"} }} />
                  </Box>
                  </Box>
               
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Footer;
