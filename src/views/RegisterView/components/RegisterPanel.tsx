import React from "react";
import { Flex } from "@chakra-ui/react";
import { BorderBox } from "../../../components/BorderBox";
import { RegisterFormSection } from "./RegisterFormSection";
import { TextWithLink } from "../../../components/TextWithLink";
import { ButtonComponent } from "../../../components/ButtonComponent";

interface RegisterPanelProps {}

export const RegisterPanel: React.FC<RegisterPanelProps> = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="center"
    >
      <BorderBox h="670px">
        <Flex justify="center">
          <RegisterFormSection />
        </Flex>
        <Flex justify="center">
          <TextWithLink
            top={["525px", "525px", "615px"]}
            text="Masz konto?"
            linkText="Zaloguj się"
            linkHref="/"
          />
        </Flex>
      </BorderBox>
    </Flex>
  );
};
