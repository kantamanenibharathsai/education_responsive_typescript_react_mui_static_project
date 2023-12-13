import { Component } from "react";
import { Box, Typography } from "@mui/material";
import cardFiveStyles from "./cardfive.styles";
import comma from "../../assets/commacomma.svg";
import woman from "../../assets/woman.jpg"

class CardFive extends Component {
  render() {
    return (
      <Box sx={cardFiveStyles.cardContainer}>
        <Box sx={cardFiveStyles.cardChidContainer}>
          <Box
            sx={cardFiveStyles.commaImage}
            alt=""
            src={comma}
            component="img"
          />
          <Typography component="p" sx={cardFiveStyles.text1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            odit molestiae amet aperiam quae perspiciatis, voluptas eveniet.
            Modi doloremque cupiditate iure harum. Corporis expedita quaerat eum
            minima at ea. Ipsa.
          </Typography>
          <Box sx={cardFiveStyles.childContainer}>
            <Box src={woman} alt="" component="img" sx={cardFiveStyles.profileImg} />
            <Typography sx={cardFiveStyles.text2}>harshita raj</Typography>
            <Typography sx={cardFiveStyles.text3}>Web Student</Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default CardFive;
