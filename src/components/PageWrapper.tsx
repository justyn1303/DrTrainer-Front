import React from "react";
import { Flex } from "@chakra-ui/react";
import { Background } from "./Background";

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      width="100%"
      height="100vh"
      pos="relative"
      overflow="hidden"
    >
      <Background />
      {children}
    </Flex>
  );
};
