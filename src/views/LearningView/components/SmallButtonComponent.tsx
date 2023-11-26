import React from "react";
import { Button, ButtonProps, BoxProps } from "@chakra-ui/react";
import { TextComponent } from "../../../components/TextComponent";

interface SmallButtonComponentProps extends ButtonProps {
  buttonText?: string;
  buttonFontSize?: number;
  textComponentStyle?: BoxProps;
}

export const SmallButtonComponent: React.FC<SmallButtonComponentProps> = ({
  buttonText = "Zaloguj się",
  buttonFontSize = 14,
  textComponentStyle,
  ...rest
}) => {
  return (
    <Button
      className="ButtonLogin"
      w="170px"
      h="35px"
      top="380px"
      right="80px"
      position="absolute"
      bg="#D9D9D9"
      borderRadius="20px"
      border="5px #D9D9D9 solid"
      {...rest}
    >
      <TextComponent
        text={buttonText}
        fontSize={buttonFontSize}
        style={{
          width: "100%",
          height: "25px",
          left: "0",
          top: "5px",
          position: "absolute",
          color: "#342F2F",
          fontSize: `${buttonFontSize}px`,
        }}
      />
    </Button>
  );
};
