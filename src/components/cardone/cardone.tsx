import { Component } from "react";
import { Box, Typography } from "@mui/material";
import cardOneStyles from "./cardone.styles";
import TvIcon from "@mui/icons-material/Tv";

class CardOne extends Component {
  render() {
    return (
      <Box sx={cardOneStyles.cardContainer}>
        <Box sx={cardOneStyles.cardContainerChild}>
          <Box sx={cardOneStyles.imageContainer}>
            <TvIcon sx={cardOneStyles.iconImage} />
          </Box>
          <Box sx={cardOneStyles.textContainer}>
            <Typography component="h2" sx={cardOneStyles.heading}>
              Live Class
            </Typography>
            <Typography component="p" sx={cardOneStyles.paragraph}>
              Online live class regularly
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default CardOne;
