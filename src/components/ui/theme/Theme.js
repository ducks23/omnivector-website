import { createMuiTheme } from '@material-ui/core/styles';

const oslBlue = "#0075b2";
const oslOrange = "#FF8B00";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${oslBlue}`,
      orange: `${oslOrange}`
    },
    primary: {
      main: `${oslBlue}`
    },
    secondary: {
      main: `${oslOrange}`
    }
  },
  typography: {
    tab: {
      fontFamily: "Ubuntu",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "0.5 rem"
    },
    deploy: {
      fontFamily: "Ubuntu",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1 rem",
      color: "white",
    }
  },
  serviceCard: {
    card: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "white",
      width: "30vw",
      height: "725px",
      borderRadius: "16px",
      margin: "0 3vw",
      boxShadow: "4px 4px 8px rgba(0, 0, 0, .5)"
    },
    header: {
      display: "block",
      textAlign: "left",
      fontFamily: "Ubuntu",
      margin:  "0px 16px"
    }
  }
})
