import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface DetectionWindowProps extends BoxProps {
  children?: React.ReactNode;
}

export const DetectionWindow: React.FC<DetectionWindowProps> = ({
  children,
  ...rest
}) => {
  return (
    <Box
      className="BorderBox"
      w="1850px"
      h="700px"
      top="100px"
      left="50px"
      position="absolute"
      background="black"
      borderRadius="20px"
      border="5px #D9D9D9 solid"
      mx="auto"
      {...rest}
    >
      {children}
    </Box>
  );
};
