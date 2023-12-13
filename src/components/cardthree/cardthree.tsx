import { Component } from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Box,
} from "@mui/material";
import cardStyles from "./cardthree.styles";
import userExperienceDesign from "../../assets/userexperiencedesign.png";
import smallImage from "../../assets/smallImage.png"

class CardThree extends Component {
  render() {
    return (
      <Card sx={cardStyles.cardContainer}>
        <CardMedia
          sx={{ height: {xs:"195px",sm: "215px", md: "193px", lg: "220px"}, borderRadius: "6px" }}
          image={userExperienceDesign}
          title="Persons"
        />
        <CardContent sx={{padding: "2px"}}>
          <Typography component="h2" sx={cardStyles.text1}>
            User Experience Design
          </Typography>
          <Typography component="h3" sx={cardStyles.text2}>
            The complete ui/ux design course for beginer.
          </Typography>
          <Box sx={cardStyles.cardBodyChildContainer1}>
            <Typography component="p" sx={cardStyles.text3}>
              $24
            </Typography>
            <Box sx={cardStyles.cardBodyChildContainer2}>
              <Rating
                name="read-only"
                value={4}
                sx={cardStyles.rating}
                readOnly
              />
              <Typography variant="body1" sx={cardStyles.text4}>
                4.5
              </Typography>
            </Box>
          </Box>
          <Box sx={cardStyles.cardBodyChildContainer3}>
            <Box sx={cardStyles.cardBodyChildContainer4}>
              <Box component="img" sx={cardStyles.cardSmallImg} alt="" src={smallImage} />
              <Typography component="p" sx={cardStyles.text5}>
                Glenn Maxi
              </Typography>
            </Box>
            <Typography component="p" sx={cardStyles.text6}>
              20 Lessons
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  }
}

export default CardThree;
