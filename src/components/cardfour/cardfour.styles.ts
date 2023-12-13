const cardFourStyles = {
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // border: "2px solid red",
    backgroundColor: "white !important",
    borderRadius: "4px",
    padding: "20px 0px",
    //gap: "13px",
    boxSizing: "border-box",
    width: { xs: "100%", sm: "90%", md: "49%", lg: "43%" },
    margin: { sm: "auto", md: "0" },
    marginBottom: { xs: "20px", sm: "22px", md: "25px" },
    // boxShadow: "0.1px 0px 0px",
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
  },

  cardContainerChild: {
    // border: "2px solid green",
    width: "95%",
    margin: "auto",
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: "center",
    justifyContent: "space-between",
    gap: "15px",
  },

  imageContainer: {
    // backgroundColor: "#ffcc99",
    // borderRadius: "100%",
    // width: { xs: "60px", sm: "60px", md: "40px" },
    // height: { xs: "60px", sm: "60px", md: "40px" },
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    // alignSelf: { xs: "center", sm: "center", md: "center" },
    // border: "1px solid green",
    // minWidth: "35%",
    // minHeight: "auto",
    // height: "100%",
    // width: "100%",
    width: { xs: "100%", sm: "172px", md: "150px", lg:"170px" },
  },

  manImage: {
    // border: '1px solid orange',
    width: { xs: "100%", sm: "180px", md: "155px", lg:"170px" },
    height: { xs: "240px", sm: "180px", md: "170px", lg: "170px" },
    borderRadius: "7px",
  },

  textContainer: {
    padding: "0",
    // border: "1px solid black",
    // width: "60%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  text1: {
    fontSize: "21px",
    fontWeight: "600",
    color: "black",
    fontFamily: "Roboto",
    // border: "1px solid black",
    // marginTop: "10px",
    opacity: 0.7,
  },

  text2: {
    fontFamily: "Roboto",
    fontSize: { xs: "14px" },
    color: "black",
    fontWeight: "200",
    // marginTop: "6px",
    opacity: 0.7,
  },

  text3: {
    fontFamily: "Roboto",
    fontSize: "14px",
    color: "black",
    fontWeight: "200",
    // marginTop: "8px",
    opacity: 0.7,
    lineHeight: "18px",
  },

  cardButton: {
    color: "white",
    backgroundColor: "#ff5c33",
    outline: "none",
    cursor: "pointer",
    padding: "4px 11px",
    border: "none",
    textTransform: "capitalize",
    fontSize: "12px",
    fontWeight: "500",
    fontFamily: "Roboto",
    borderRadius: "3px",
    opacity: 0.7,
    marginTop: "6px",
    // margin: {sm: "auto", md: "auto"},
    alignSelf: "flex-start",
  },
};

export default cardFourStyles;
