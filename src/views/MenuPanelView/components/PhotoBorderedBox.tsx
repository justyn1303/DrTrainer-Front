import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface PhotoBorderBoxProps extends BoxProps {
  width?: string | number;
  height?: string | number;
  backgroundImage: string;
  to: string;
}

export const PhotoBorderBox: React.FC<PhotoBorderBoxProps> = ({
  width = 430,
  height = 580,
  backgroundImage,
  to,
  children,
  ...rest
}) => {
  return (
    <Link to={to}>
      <Box
        className="BorderBox"
        w={["40%", "70%", "430px"]}
        h={["40%", "70%", "580px"]}
        top="265px"
        position="absolute"
        background={`url(${backgroundImage}) center center/cover no-repeat`}
        borderRadius="20px"
        border="5px #D9D9D9 solid"
        mx="auto"
        {...rest}
      >
        {children}
      </Box>
    </Link>
  );
};
