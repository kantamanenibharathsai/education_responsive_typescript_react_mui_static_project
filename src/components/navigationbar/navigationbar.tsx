import { Component } from "react";
import navigationBarStyle from "./navigationbar.styles";
import { Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

interface state {
  isHamburgerIconClicked: boolean;
  isHomeClicked: boolean;
  isCoursesClicked: boolean;
  isBenefitsClicked: boolean;
  isContactsClicked: boolean;
  // showNavbar: boolean;
}

interface props {
  handleParent: Function;
}

class NavigationBar extends Component<props, state> {
  constructor(props: props) {
    super(props);
    this.state = {
      isHamburgerIconClicked: false,
      isHomeClicked: false,
      isCoursesClicked: false,
      isBenefitsClicked: false,
      isContactsClicked: false,
      // showNavbar: false,
    };
  }

  componentDidMount() {
    console.log(window.addEventListener);
    window.addEventListener("scroll", this.handleScroll);
    console.log(window);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY >= 70) {
      this.props.handleParent(true);
      // this.setState({ showNavbar: true });
    } else if (window.scrollY < 70) {
      this.props.handleParent(false);
    }
  };

  iconEventHandler = () => {
    this.setState((prevState) => ({
      isHamburgerIconClicked: !prevState.isHamburgerIconClicked,
    }));
  };

  homeEventhandler = () => {
    console.log("dsvjbsdvm ");
    this.setState({
      isHomeClicked: true,
      isCoursesClicked: false,
      isBenefitsClicked: false,
      isContactsClicked: false,
    });
  };

  coursesEventhandler = () => {
    this.setState({
      isHomeClicked: false,
      isCoursesClicked: true,
      isBenefitsClicked: false,
      isContactsClicked: false,
    });
  };

  benefitsEventhandler = () => {
    this.setState({
      isHomeClicked: false,
      isCoursesClicked: false,
      isBenefitsClicked: true,
      isContactsClicked: false,
    });
  };

  contactEventhandler = () => {
    this.setState({
      isHomeClicked: false,
      isCoursesClicked: false,
      isBenefitsClicked: false,
      isContactsClicked: true,
    });
  };

  aboutEventhandler = () => {
    this.setState({
      isHomeClicked: false,
      isCoursesClicked: false,
      isBenefitsClicked: false,
      isContactsClicked: false,
  
    });
  };

  render() {
    const {
      isHamburgerIconClicked,
      isHomeClicked,
      isCoursesClicked,
      isBenefitsClicked,
      isContactsClicked,
      // showNavbar,
    } = this.state;

    return (
      <>
        <Box sx={navigationBarStyle.navigationBarParentContainer}>
          <Box sx={navigationBarStyle.upskillLogo}>WorkUp</Box>
          <Box sx={navigationBarStyle.unorderedList}>
            <Box
              sx={{
                ...navigationBarStyle.listItem,
                borderBottom: isHomeClicked ? "#e3204b" : "transparent",
              }}
              onClick={this.homeEventhandler}
            >
              Home
            </Box>
            <Box
              sx={{
                ...navigationBarStyle.listItem,
                borderBottom: isCoursesClicked ? "#e3204b" : "transparent",
              }}
              onClick={this.coursesEventhandler}
            >
              Category
            </Box>
            <Box
              sx={{
                ...navigationBarStyle.listItem,
                borderBottom: isBenefitsClicked ? "#e3204b" : "transparent",
              }}
              onClick={this.benefitsEventhandler}
            >
              Post A Job
            </Box>
            <Box
              sx={{
                ...navigationBarStyle.listItem,
                borderBottom: isContactsClicked ? "#e3204b" : "transparent",
              }}
              onClick={this.contactEventhandler} // border: "1px solid red" ,
            >
              About
            </Box>
            <Box
              sx={{
                ...navigationBarStyle.listItem,
                borderBottom: isContactsClicked ? "#e3204b" : "transparent",
              }}
              onClick={this.aboutEventhandler} // border: "1px solid red" ,
            >
              Contact
            </Box>
          </Box>
          <Box sx={navigationBarStyle.buttonsContainer}>
            <Button sx={navigationBarStyle.loginBtn} variant="text">
              Log in
            </Button>
            <Button sx={navigationBarStyle.signupBtn} variant="contained">
              Sign up
            </Button>
          </Box>
          <Box sx={navigationBarStyle.smallBtnsContainer}>
            {isHamburgerIconClicked === false && (
              <MenuIcon
                sx={navigationBarStyle.icon}
                onClick={this.iconEventHandler}
              />
            )}
          </Box>
          {/* {isHamburgerIconClicked && ( */}
          {/* <Box sx={{ ...navigationBarStyle.menuContentParentContainer , height: !isHamburgerIconClicked ? '0px' : '300px'}}> */}
          <Box
            sx={{
              ...navigationBarStyle.menuContentParentContainer,
              width: !isHamburgerIconClicked ? "0px" : { xs: "85%", sm: "56%" },
              // border: "1px solid red"
            }}
          >
            <Box sx={navigationBarStyle.closeIconBtnContainer}>
              <CloseIcon
                sx={{
                  ...navigationBarStyle.icon,
                  ...navigationBarStyle.closeIcon,
                }}
                onClick={this.iconEventHandler}
              />
            </Box>
            <Box sx={navigationBarStyle.drawerItems}>
              <Box
                sx={{
                  ...navigationBarStyle.listItemSmall,
                  backgroundColor: isHomeClicked ? "#bf6b62" : "transparent",
                }}
                onClick={this.homeEventhandler}
              >
                Home
              </Box>
              <Box
                sx={{
                  ...navigationBarStyle.listItemSmall,
                  backgroundColor: isCoursesClicked ? "#bf6b62" : "transparent",
                }}
                onClick={this.coursesEventhandler}
              >
                Courses
              </Box>
              <Box
                sx={{
                  ...navigationBarStyle.listItemSmall,
                  backgroundColor: isBenefitsClicked
                    ? "#bf6b62"
                    : "transparent",
                }}
                onClick={this.benefitsEventhandler}
              >
                Benefits
              </Box>
              <Box
                sx={{
                  ...navigationBarStyle.listItemSmall,
                  backgroundColor: isContactsClicked
                    ? "#bf6b62"
                    : "transparent",
                }}
                onClick={this.contactEventhandler}
              >
                Contacts
              </Box>
              <Box sx={navigationBarStyle.smallLoginButtonsContainer}>
                <Button sx={navigationBarStyle.loginBtn}>Log in</Button>
                <Button sx={navigationBarStyle.signupBtn}>Sign up</Button>
              </Box>
            </Box>
          </Box>
          {/* )} */}
        </Box>
      </>
    );
  }
}
export default NavigationBar;
