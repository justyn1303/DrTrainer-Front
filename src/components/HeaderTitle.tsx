import React from "react";
import { Box } from "@chakra-ui/react";

interface HeaderTitleProps {}

export const HeaderTitle: React.FC<HeaderTitleProps> = () => {
  return (
    <Box
      className="DrTrainer"
      w={["100%", "100%", "744px"]}
      h={["auto", "auto", "208px"]}
      top="70px"
      pos="absolute"
      textAlign="center"
      color="#D9D9D9"
      fontSize={["4xl", "5xl", "8xl"]}
      fontFamily="Inter"
      fontWeight={700}
      lineHeight={["md", "xl", "2xl"]}
      letterSpacing="0em"
      overflowWrap="break-word"
    >
      DR TRAINER
    </Box>
  );
};
