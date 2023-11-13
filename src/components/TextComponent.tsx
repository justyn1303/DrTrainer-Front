import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface TextComponentProps extends BoxProps {
  top?: string | string[];
  text?: string;
  fontSize?: number;
}

export const TextComponent: React.FC<TextComponentProps> = ({
  text = "Login",
  fontSize = 15,
  top = "33px",
  ...rest
}) => {
  const topValue = Array.isArray(top) ? top[0] : top;
  return (
    <Box
      className="Login"
      w={["100%", "100%", "110px"]}
      h={["auto", "auto", "25px"]}
      top={topValue}
      right="290px"
      pos="absolute"
      textAlign="center"
      color="#D9D9D9"
      fontSize={["sm", "md", `${fontSize}px`]}
      fontFamily="Inter"
      fontWeight={700}
      lineHeight={["sm", "md", "18px"]}
      letterSpacing="0em"
      overflowWrap="break-word"
      {...rest}
    >
      {text}
    </Box>
  );
};
