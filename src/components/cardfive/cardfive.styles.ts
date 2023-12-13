const cardFiveStyles = {
  cardContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "15px 0px",
    boxSizing: "border-box",
    width: { xs: "100%", sm: "54%", md: "31%", lg: "28%"},
    margin: {sm:"auto", md: "0"},
    marginBottom: { xs: "20px", sm:"20px", md: "0px" },
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },

  cardChidContainer: {
    width: "90%",
    margin: "auto",
    // border: "1px solid green",
  },

  commaImage: {
    width: "65px",
    height: "65px",
    color:"yellow"
  },

  text1: {
    fontFamily: "Roboto",
    fontSize: "14px",
    color: "black",
    fontWeight: "200",
    // marginTop: "8px",
    opacity: 0.7,
    textAlign: "center"
  },

  childContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    marginTop: "29px",
  },

  profileImg: {
    borderRadius: "100%",
    height: "100px",
    width: "100px",
  },

  text2: {
    fontFamily: "Roboto",
    fontSize: "16px",
    color: "black",
    fontWeight: "600",
    // marginTop: "8px",
    opacity: 0.6,
    // border: "2px solid red",
    padding: "0"
  },

  text3: {
    fontFamily: "Roboto",
    fontSize: "11px",
    color: "black",
    fontWeight: "200",
    // marginTop: "8px",
    opacity: 0.7,
    // border: "2px solid red",
    padding: "0"
  },
};

export default cardFiveStyles;
