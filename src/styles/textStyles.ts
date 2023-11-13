// theme.ts
import { extendTheme } from "@chakra-ui/react";

const commonTextStyle = {
  color: "#D9D9D9",
  fontSize: "15px",
  fontFamily: "Inter",
  fontWeight: "700",
  textTransform: "uppercase",
  whiteSpace: "break-spaces",
};

export const theme = extendTheme({
  textStyles: {
    drTrainer: {
      ...commonTextStyle,
      fontSize: "85px",
    },
    zalogujSie: commonTextStyle,
    haslo: commonTextStyle,
    login: commonTextStyle,
    zapamietajMnie: commonTextStyle,
    nieMaszKonta: commonTextStyle,
  },
});
