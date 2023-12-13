import { Component } from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Rating,
} from "@mui/material";
import cardStyles from "./card.styles";
import educationImg from "../../assets/education.png";

class CardComponent extends Component {
  render() {
    return (
      <Card sx={cardStyles.cardContainer}>
        <CardMedia
          sx={{ height: "230px" }}
          image={educationImg}
          title="Persons"
        />
        <CardContent sx={{ marginLeft: "17px", marginRight: "17px" }}>
          <Typography variant="h4" component="div" sx={cardStyles.text2}>
            UI/UX Design
          </Typography>
          <Typography variant="body2" sx={cardStyles.price}>
            Reserve Price
          </Typography>
          <Typography variant="h5" sx={cardStyles.text3}>
            $50.24
          </Typography>
          <Typography variant="body1" sx={cardStyles.text4}>
            4.5
          </Typography>
          <Rating name="read-only" value={4} sx={cardStyles.rating} readOnly />
          <Typography variant="body1" sx={cardStyles.text5}>
            (4,520)
          </Typography>
        </CardContent>
        <CardActions
          sx={{ marginBottom: "20px", marginLeft: "17px", marginRight: "17px" }}
        >
          <Button sx={cardStyles.enroll}>Enroll Course</Button>
          <Button sx={cardStyles.learnMore}>Learn More</Button>
        </CardActions>
      </Card>
    );
  }
}

export default CardComponent;
