import React from "react";
import { BoxProps, Checkbox, Flex } from "@chakra-ui/react";
import { TextComponent } from "./TextComponent";

interface CheckboxWithLabelProps extends BoxProps {}

export const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = () => {
  return (
    <Flex
      direction="row"
      align="center"
      justify="flex-start"
      top="305px"
      pos="absolute"
      right="340px"
    >
      <Checkbox colorScheme="blue">
        <TextComponent
          left="50px"
          top="0px"
          text="Zapamiętaj mnie"
          fontSize={15}
        />
      </Checkbox>
    </Flex>
  );
};
