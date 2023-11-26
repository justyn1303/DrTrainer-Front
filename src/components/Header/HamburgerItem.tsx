import React from "react";
import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

interface HamburgerItemProps {
  text: string;
  to: string;
}

export const HamburgerItem: React.FC<HamburgerItemProps> = ({ text, to }) => (
  <Link
    to={to}
    style={{
      textDecoration: "none",
      width: "100%", // Ustawienie szerokości na 100%
      display: "block", // Aby zachować blokowy charakter linku
    }}
  >
    <Box p={4} cursor="pointer" _hover={{ bg: "gray.700" }} w="100%">
      <Text>{text}</Text>
    </Box>
  </Link>
);
