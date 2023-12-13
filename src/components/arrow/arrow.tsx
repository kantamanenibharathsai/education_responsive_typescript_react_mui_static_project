import { Component } from "react";
import {Button,} from "@mui/material";
import arrowBtnStyles from "./arrow.styles";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';




class ArrowButton extends Component {
    render() {
        return(
            <Button variant="contained" sx={arrowBtnStyles.arrowBtn}>
            <ExpandLessIcon sx={arrowBtnStyles.arrowIcon}/>
          </Button>
        )
    }
}


export default  ArrowButton