const cardOneStyles = {
  cardContainer: {
    // border: "2px solid red",
    backgroundColor: "white !important",
    borderRadius: "4px",
    padding: "5px",
    boxSizing: "border-box",
    width: { xs: "95%", sm: "55%", md: "32%", lg:"28%", },
    
    boxShadow: "0.1px 0px 0px",
    margin: {xs:"auto", sm: "auto", md: "0px"},
    marginBottom: { xs: "20px",sm: "20px", md: "10px" },
  },

  text1: {
    fontSize: "13px",
    fontWeight: "300",
    color: "black",
    fontFamily: "Roboto",
    opacity: 0.8,
    // border: "1px solid black",
    marginTop: "10px",
  },

  text2: {
    fontSize: "21px",
    fontWeight: "600",
    color: "black",
    fontFamily: "Roboto",
    // border: "1px solid black",
    marginTop: "10px",
    opacity: 0.7,
    lineHeight: "25px"
  },

  cardBodyChildContainer1: {
    display: "flex",
    alignItems: "center",
    // border: "1px solid black",
    justifyContent: "space-between",
    marginTop: "16px",
  },

  text3: {
    fontSize: "19px",
    fontWeight: "500",
    color: "#ff5c33",
    fontFamily: "Roboto",
    // border: "1px solid black",
  },

  cardBodyChildContainer2: {
    display: "flex",
    alignItems: "center",
    // border: "1px solid black",
    gap: "6px"
  },

  rating: {
    fontSize: "1rem",
    marginRight: "5px",
  },

  text4: {
    fontSize: "18px",
    fontWeight: "500",
    color: "black",
    fontFamily: "Roboto",
    // border: "1px solid black",
  },

  cardBodyChildContainer3: {
    // border: "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "7px"
  },

  cardBodyChildContainer4: {
    // border: "1px solid black",
    display: "flex",
    alignItems: "center",
    gap: "11px",
  },

  cardSmallImg: {
    width: "45px",
    height: "45px",
    borderRadius: "100%",
  },

  text5: {
    fontSize: "14px",
    fontWeight: "500",
    color: "black",
    fontFamily: "Roboto",
    // border: "1px solid black",
    opacity: 0.8
  },

  text6: {
    fontSize: "13px",
    fontWeight: "500",
    color: "black",
    fontFamily: "Roboto",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "grey",
    padding: "3px 9px",
    opacity: 0.6
  },
};

export default cardOneStyles;
