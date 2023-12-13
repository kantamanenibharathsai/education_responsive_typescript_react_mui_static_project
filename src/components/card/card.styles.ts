const cardStyles = {
  cardContainer: {
    width: { xs: "100%", sm: "70%", md: "340px" },
    maxWidth: { xs: "400px", sm: "380px", md: "370px" },
    boxSizing: "border-box",
    alignSelf: { xs: "center", md: "strech" },
    marginTop: { xs: "60px", md: "0px" },
    marginLeft: { md: "auto" },
    // backgroundColor: "transparent"
  },

  price: {
    color: "gray",
    marginBottom: "5px",
  },
  text2: {
    fontWeight: "600",
    marginBottom: "10px",
    fontSize: { xs: "22px", sm: "28px", md: "30px" },
  },
  text3: {
    display: "inline-block",
    fontWeight: "600",
    marginRight: "15px",
    fontSize: { xs: "18px", sm: "25px", md: "27px" },
  },
  text4: {
    display: "inline-block",
    marginRight: "5px",
  },
  rating: {
    fontSize: "1rem",
    marginRight: "5px",
  },
  text5: {
    display: "inline-block",
    color: "gray",
  },
  enroll: {
    background: "#f97269",
    color: "white",
    textTransform: "none",
    padding: { xs: "8px 17px", sm: "10px 25px" },
    fontWeight: "500",
    fontSize: { xs: "11px", sm: "15px" },
    "&: hover": {
      background: "#f97269",
    },
  },
  learnMore: {
    background: "white",
    color: "black",
    textTransform: "none",
    padding: { xs: "8px 17px", sm: "10px 25px" },
    border: "1px solid black",
    fontWeight: "500",
    fontSize: { xs: "11px", sm: "15px" },
  },
};

export default cardStyles;
