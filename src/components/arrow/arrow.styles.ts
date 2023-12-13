const arrowBtnStyles = {
  arrowBtn: {
    cursor: "pointer",
    outline: "none",
    borderRadius: "50%",
    height: "45px",
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    padding:"0",
    position: "fixed",
    bottom: "30px",
    right: "30px",
    // backgroundColor: "blue"

    "&: hover": {
        backgroundColor: "#34ebb1",
        // color: "black"
    }

  },

  arrowIcon: {
    fontSize: "27px",
    color: "white",
    // border: "1px solid red"
  },
};

export default arrowBtnStyles;
