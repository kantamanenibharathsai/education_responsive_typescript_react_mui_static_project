const cardTwoStyles = {
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // border: "2px solid red",
    backgroundColor: "white !important",
    borderRadius: "4px",
    padding: "25px 0px",
    gap: "13px",
    boxSizing: "border-box",
    width: { xs: "94%", sm: "48%", md: "23%", lg: "23%" },
    // maxWidth: {md: '49%'},
    margin: { xs: "auto", sm: "0px" },
    marginBottom: { xs: "15px", sm: "15px", md: "10px" },
    // marginRight: {md: "10px"},
    // boxShadow: "0.1px 0px 0px",
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    // flexGrow: "1"
  },

  cardContainerChild: {
    // border: "2px solid green",
    width: "85%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
    // justifyContent: "space-between",
  },

  imageContainer: {
    backgroundColor: "#ffcc99",
    borderRadius: "100%",
    width: { xs: "60px", sm: "60px", md: "40px" },
    height: { xs: "60px", sm: "60px", md: "40px" },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: { xs: "center", sm: "center", md: "center" },
  },

  cardImage: {
    // border: '1px solid orange',
    color: "orange",
    width: { xs: "50px", md: "50px" },
    height: { xs: "50px", md: "50px" },
  },

  textContainer: {
    padding: "0",
    // border: "2px solid red"
  },

  heading: {
    fontSize: { xs: "19px", sm: "19px", md: "19px" },
    fontWeight: "600",
    color: "black",
    fontFamily: "Roboto",
    // marginLeft: "auto",
    // textAlign: "center",
    // paddingLeft: "6px"
    // border: "2px solid red",
    padding: "0",
    margin: "0px",
  },

  paragraph: {
    fontSize: { xs: "16px", sm: "16px", md: "16px" },
    fontWeight: "400",
    color: "black",
    fontFamily: "Roboto",
    // textAlign: "center",
    // paddingLeft: "6px"
    // border: "2px solid red",
    padding: "0",
    margin: "0px",
  },
};

export default cardTwoStyles;
