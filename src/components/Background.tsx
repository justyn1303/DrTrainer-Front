import React from "react";
import { Box } from "@chakra-ui/react";
import BackgroundImage from "../assets/Background.svg";

interface BackgroundProps {}

export const Background: React.FC<BackgroundProps> = () => {
  return (
    <Box
      pos="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={-1}
      backgroundImage={`url(${BackgroundImage})`}
      backgroundPosition="top center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    />
  );
};
