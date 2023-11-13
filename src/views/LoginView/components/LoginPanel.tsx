import React from "react";
import { Flex } from "@chakra-ui/react";
import { BorderBox } from "../../../components/BorderBox";
import { LoginFormSection } from "./LoginFormSection";
import { TextWithLink } from "../../../components/TextWithLink";
import { ButtonComponent } from "../../../components/ButtonComponent";

interface LoginPanelProps {}

export const LoginPanel: React.FC<LoginPanelProps> = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="center"
    >
      <BorderBox>
        <Flex justify="center">
          <LoginFormSection />
        </Flex>
        <Flex justify="center">
          <ButtonComponent top={["405px", "405px", "405px"]} />
        </Flex>
        <Flex justify="center">
          <TextWithLink
            top={["525px", "525px", "525px"]}
            text="Nie masz konta?"
            linkText="Zarejestruj się"
            linkHref="/register"
          />
        </Flex>
      </BorderBox>
    </Flex>
  );
};
