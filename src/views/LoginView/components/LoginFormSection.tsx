import React from "react";
import { Flex } from "@chakra-ui/react";
import { TextComponent } from "../../../components/TextComponent";
import { TextForm } from "../../../components/TextForm";
import { CheckboxWithLabel } from "../../../components/Checkbox";

interface LoginFormSectionProps {}

export const LoginFormSection: React.FC<LoginFormSectionProps> = () => {
  return (
    <>
      <TextComponent top={["53px", "53px", "53px"]} text="Nick" fontSize={15} />
      <TextForm top={["85px", "85px", "85px"]} />
      <TextComponent
        top={["173px", "173px", "173px"]}
        text="Hasło"
        fontSize={15}
      />
      <TextForm top={["205px", "205px", "205px"]} />
      <CheckboxWithLabel top={["305px", "305px", "305px"]} />
    </>
  );
};
