import React, { useState } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface DetectionWindowProps extends BoxProps {
  imageData?: string;
  children?: React.ReactNode;
}

export const DetectionWindow: React.FC<DetectionWindowProps> = ({
  children,
  imageData,
  ...rest
}) => {
  return (
    <Box
      className="BorderBox"
      w="1580px"
      h="855px"
      top="75px"
      left="10px"
      position="absolute"
      background="black"
      borderRadius="20px"
      border="5px #D9D9D9 solid"
      mx="auto"
      overflow="hidden"
      {...rest}
    ></Box>
  );
};
