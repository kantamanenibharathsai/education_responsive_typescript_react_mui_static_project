const footerStyles = {
  footerContainer: {
    width: "100%",
    padding: "60px 0px",
    backgroundColor: "white",
  },

  footerChildContainer: {
    margin: "auto",
    // border: "1px solid red",
    width: "90%",
    display: "flex",
    flexDirection: { xs: "column", md: "column", lg: "row" },
    justifyContent: "space-between",
    flexWrap: "wrap",
    // alignItems: "center",
  },

  footerChildContainer1: {
    width: { xs: "100%", sm: "100%", md: "50%", lg: "28%" },
    // border: "7px solid green",
  },

  footerChildWrapper: {
    display: "flex",
    flexDirection: { xs: "row", md: "row" },
    // border: "2px solid pink",
    width: { xs: "100%", lg: "66%" },
    flexWrap: { xs: "wrap", md: "no-wrap" },
    // gap:"20px"
    justifyContent: { xs: "space-between", lg: "flex-end" },
    marginTop: { xs: "50px", lg: "0px" },
  },

  upskillText: {
    fontFamily: "Roboto",
    fontSize: { xs: "20px", sm: "23px" },
    color: "black",
    fontWeight: "600",
    opacity: 0.7,
  },

  paraText: {
    fontFamily: "Roboto",
    fontSize: { xs: "16px", sm: "18px" },
    color: "black",
    fontWeight: "200",
    opacity: 0.7,
  },

  textSubscribe: {
    fontFamily: "Roboto",
    fontSize: { xs: "16px", sm: "18px" },
    color: "black",
    fontWeight: "600",
    opacity: 0.8,
    marginTop: "13px",
    marginBottom: "9px",
  },

  inputContainer: {
    backgroundColor: "#dae6dd",
    borderRadius: "3px",
    width: {xs:"100%", sm:"65%", md:"100%"},
    padding: "5px 2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  inputEl: {
    // border: "1px solid orange",
    border: "none",
    cursor: "pointer",
    outline: "none",
    fontFamily: "Roboto",
    fontSize: { xs: "16px", sm: "18px" },
    color: "black",
    fontWeight: "600",
    opacity: 0.7,
    padding: "0px 6px",
    height: {xs:"38px", sm:"41px"},
    // flexGrow: "1",
    backgroundColor: "transparent",
  },

  boxIcon: {
    backgroundColor: "#ba370f",
    borderRadius: "3px",
    height: {xs:"38px", sm:"41px"},
    width: { xs: "50px", sm: "55px" },
    marginRight:"4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  footerChildContainer2: {
    width: { xs: "50%", md: "25%", lg: "23%" },
    // border: "1px solid green",
    minHeight: "auto",
    marginBottom: { xs: "19px", md: "0px" },
  },

  text1: {
    fontFamily: "Roboto",
    fontSize: { xs: "17px", sm: "19px" },
    color: "black",
    fontWeight: "600",
    opacity: 0.7,
    marginBottom: "9px",
  },

  text2: {
    fontFamily: "Roboto",
    fontSize: { xs: "15px", sm: "17px" },
    color: "black",
    fontWeight: "100",
    opacity: 0.7,
  },
};

export default footerStyles;
  