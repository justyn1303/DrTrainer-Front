import React from "react";
import { Button, ButtonProps, BoxProps } from "@chakra-ui/react";
import { TextComponent } from "./TextComponent";

interface ButtonComponentProps extends ButtonProps {
  buttonText?: string;
  buttonFontSize?: number;
  textComponentStyle?: BoxProps;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  buttonText = "Zaloguj się",
  buttonFontSize = 15,
  textComponentStyle,
  ...rest
}) => {
  return (
    <Button
      className="ButtonLogin"
      w={["100%", "100%", "167px"]}
      h={["auto", "auto", "52px"]}
      top="405px"
      pos="absolute"
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
          top: "12px",
          position: "absolute",
          color: "#342F2F",
          fontSize: `${buttonFontSize}px`,
        }}
      />
    </Button>
  );
};
