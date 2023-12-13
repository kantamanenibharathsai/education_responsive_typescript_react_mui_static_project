const cardOneStyles = {
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // border: "2px solid red",
    backgroundColor: "white !important",
    borderRadius: "4px",
    padding: { xs: "13px 0px", sm: "15px 0px", md: "8px 0px" },
    //gap: "13px",
    boxSizing: "border-box",
    width: { xs: "100%", sm: "49%" },
    maxWidth: { md: "49%" },
    marginBottom: { xs: "15px", md: "10px" },
    // boxShadow: "0.1px 0px 0px",
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
  },

  cardContainerChild: {
    // border: "2px solid green",
    width: "90%",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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

  iconImage: {
    // border: '1px solid orange',
    color: "orange",
    width: { xs: "24px", md: "20px" },
    height: { xs: "24px", md: "20px" },
  },

  textContainer: {
    padding: "0",
    // border: "2px solid red"
  },

  heading: {
    fontSize: { xs: "19px", sm: "17px", md: "11px" },
    fontWeight: "600",
    color: "black",
    fontFamily: "Roboto",
    marginLeft: "auto",
    // textAlign: "center",
    paddingLeft: "6px",
  },

  paragraph: {
    fontSize: { xs: "17px", sm: "17px", md: "9px" },
    fontWeight: "400",
    color: "black",
    fontFamily: "Roboto",
    // textAlign: "center",
    paddingLeft: "6px",
  },
};

export default cardOneStyles;
