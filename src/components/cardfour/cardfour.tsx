import { Component } from "react";
import {
    Typography,
    // Card,
    // CardMedia,
    // CardContent,
    // CardActions,
    Button,
   Box
  } from "@mui/material";
import cardFourStyles from "./cardfour.styles";
import man from "../../assets/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.avif"

class CardFour extends Component {
  render() {
    return (
      <Box sx={cardFourStyles.cardContainer}>
        <Box sx={cardFourStyles.cardContainerChild}>
          <Box sx={cardFourStyles.imageContainer}>
           <Box sx={cardFourStyles.manImage} src={man} alt="" component="img"/>
          </Box>
          <Box sx={cardFourStyles.textContainer}>
            <Typography component="h2" sx={cardFourStyles.text1}>
              Aaron Finch
            </Typography>
            <Typography component="h2" sx={cardFourStyles.text2}>
              Marketing Teacher
            </Typography>
            <Typography component="p" sx={cardFourStyles.text3}>
              Aaron finch is one of the best digital marketing course mentor of our platform. He is very generous.
            </Typography>
            <Button sx={cardFourStyles.cardButton}>View Profile</Button>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default CardFour;
