const navigationBarStyle = {
  navigationBarParentContainer: {
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    boxSizing: "border-box",
    // border: "2px solid red",
    height: "70px",
    margin: "auto",
    justifyContent: "space-between",
    // position: "relative",
    // position: "fixed",
    // top: "0px",
    // // top: '-70px', /* Initially hide the navigation bar */
    // left: "0",
    // right: "0",
    transition: "height 1.3s ease 0s",
  },

  upskillLogo: {
    fontfamily: "Roboto",
    fontSize: { xs: "17px", md: "21px" },
    color: "#ffffff",
    fontWeight: "600",
    padding: "0",
    letterSpacing: "0.9px",
    // border: "2px solid green",
  },

  unorderedList: {
    display: { xs: "none", md: "flex" },
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // flexGrow: "1",
    // border: "2px solid green",
    gap: "51px",
    padding: "0",
    // margin: "0",
    // width: "50%",
    // margin: "auto"
    marginLeft: "70px",
  },

  listItem: {
    listStyleType: "none",
    background: "transparent",
    textTransform: "capitalize",
    fontSize: "17px",
    // padding: "10px 25px",
    // position: relative;
    fontWeight: "600",
    // border: "2px solid green",
    overflow: "hidden",
    color: "#ffffff",
    fontFamily: "Roboto",
    outline: "none",
    // border: "none",
    paddingBottom: "4px",
    letterSpacing: "0.7px",
    "&:hover": { borderBottom: "2px solid #e3204b" },
  },

  menuContainer: {
    padding: "5px",
    border: "2px solid red",
    color: "red",
    display: { xs: "block", md: "none" },
    cursor: "pointer",
    transition: "4s",
    // marginLeft: { xs: "20px" },
  },
  menuContentParentContainer: {
    width: "100%",
    margin: "auto",
    // display: { xs: "flex", md: "none" },
    // flexDirection: "column",
    display: { xs: "block", md: "none" },
    background: "rgb(255, 255, 225, 10)",
    boxShadow: "0 0 30px -10px #000",
    position: "absolute",
    // top: "100%",
    top: "0%",
    // bottom: "auto",
    // left: "0%",
    right: "0%",
    gap: "10px",
    // // paddingTop: "30px",
    // // paddingBottom: "30px",
    // paddingLeft: "14px",  // border: "1px solid red" ,
    boxSizing: "border-box",
    // paddingRight: "14px",
    // borderRadius: "6px",
    // maxHeight: "0",
    overflow: "hidden",
    height: "100vh",
    // display: {xs: "block", md: "none"},
    transition: "width 1.4s ease 0s",
    zIndex: 3,
  },

  applyMaxHeight: {
    maxHeight: "500px",
  },

  listItemSmall: {
    listStyleType: "none",
    textTransform: "capitalize",
    fontSize: "17px",
    // padding: "10px 25px",
    // position: relative;
    fontWeight: "600",
    // border: "2px solid green",
    overflow: "hidden",
    color: "black",
    fontFamily: "Roboto",
    outline: "none",
    // border: "none",
    padding: "10px 4px",
    borderRadius: "5px",
    letterSpacing: "0.5px",
    "&:hover": { background: "#bf6b62" },
  },

  menuContentChildContainer: {
    width: "70%",
    // border: "2px solid green",
  },

  menuIcon: {
    "&:hover": {
      background: "#ffd030;",
      textAlign: "start",
    },
  },

  buttonsContainer: {
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    gap: "20px",
    // border: "3px solid red",
    padding: "0",
    marginLeft: "auto",
  },

  loginBtn: {
    outline: "none",
    cursor: "pointer",
    padding: { xs: "4px 19px", md: "0" },
    border: "none",
    backgroundColor: { xs: "#50916e !important", md: "transparent !important" },
    textTransform: "capitalize",
    fontSize: "17px",
    fontWeight: "500",
    color: { xs: "black", md: "#ffffff" },
    fontFamily: "Roboto",
    borderRadius: "5px",
  },

  signupBtn: {
    color: { xs: "black", md: "#d65531" },
    backgroundColor: { xs: "#09aded !important", md: "#ffffff !important" },
    outline: "none",
    cursor: "pointer",
    padding: { xs: "4px 19px", md: "4px 17px" },
    border: "none",
    textTransform: "capitalize",
    fontSize: "17px",
    fontWeight: "500",
    fontFamily: "Roboto",
    borderRadius: { xs: "5px", md: "4px" },
  },

  smallBtnsContainer: {
    // border: "1px solid black",
    // padding: "6px",
    // borderRadius: "4px",
    display: { xs: "block", md: "none" },
    // position: "absolute",
    marginLeft: "auto",
    // right: "0",
    // zIndex :6
  },

  "@keyframes expandMenu": {
    "0%": {
      transform: "rotateZ(0deg)",
    },

    "25%": {
      transform: "rotateZ(90deg)",
    },

    "50%": {
      transform: "rotateZ(180deg)",
    },

    "75%": {
      transform: "rotateZ(270deg)",
    },

    "100%": {
      transform: "rotateZ(360deg)",
    },
  },

  icon: {
    height: "25px",
    width: "25px",
    color: "white",
    // animation: "expandMenu 3s linear 0s 3 normal",
  },

  smallLoginButtonsContainer: {
    display: "flex",
    // border: "1px solid red",
    gap: "19px",
    alignItems: "center",
    marginTop: "60px",
    justifyContent: "flex-end",
  },

  closeIconBtnContainer: {
    width: "90%",
    height: "70px",
    margin: "auto",
    // verticalAlign: "middle",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    // textAlign: "right",
    // border: "1px solid red"
  },

  closeIcon: {
    color: "blue",
    marginRight: "6px",
  }, // border: "1px solid red" ,

  drawerItems: {
    width: "90%",
    margin: "auto",
    // border: "1px solid red" ,
    marginTop: "40px",
  },
};

export default navigationBarStyle;
