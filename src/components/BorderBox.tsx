import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface BorderBoxProps extends BoxProps {
  width?: string | number;
  height?: string | number;
  children?: React.ReactNode;
}

export const BorderBox: React.FC<BorderBoxProps> = ({
  width = 430,
  height = 580,
  children,
  ...rest
}) => {
  return (
    <Box
      className="BorderBox"
      w={["40%", "70%", "430px"]}
      h={["40%", "70%", "580px"]}
      top="265px"
      position="absolute"
      background="rgba(0, 0, 0, 0)"
      borderRadius="20px"
      border="5px #D9D9D9 solid"
      mx="auto"
      {...rest}
    >
      {children}
    </Box>
  );
};
