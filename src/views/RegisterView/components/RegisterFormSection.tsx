import React from "react";
import { Flex } from "@chakra-ui/react";
import { TextComponent } from "../../../components/TextComponent";
import { TextForm } from "../../../components/TextForm";
import { CheckboxWithLabel } from "../../../components/Checkbox";

interface RegisterFormSectionProps {}

export const RegisterFormSection: React.FC<RegisterFormSectionProps> = () => {
  return (
    <>
      <TextComponent top={["53px", "53px", "53px"]} text="Nick" fontSize={15} />
      <TextForm top={["85px", "85px", "85px"]} />
      <TextComponent
        top={["173px", "173px", "173px"]}
        text="Email"
        fontSize={15}
      />
      <TextForm top={["205px", "205px", "205px"]} />
      <TextComponent
        top={["293px", "293px", "293px"]}
        text="Hasło"
        fontSize={15}
      />
      <TextForm top={["325px", "235px", "325px"]} />
      <TextComponent
        top={["413px", "413px", "413px"]}
        right="263px"
        text="Powtórz Hasło"
        fontSize={15}
      />
      <TextForm top={["445px", "445px", "445px"]} />
    </>
  );
};
