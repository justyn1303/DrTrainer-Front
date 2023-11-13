import React, { useState } from "react";
import { Box, BoxProps, Input } from "@chakra-ui/react";

interface TextFormProps extends BoxProps {
  top?: string | string[];
}

export const TextForm: React.FC<TextFormProps> = ({
  top = "370px",
  ...rest
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isActive, setIsActive] = useState(false);

  const topValue = Array.isArray(top) ? top[0] : top;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <Box
      className="TextForm"
      w={["40%", "70%", "321px"]}
      h={["40%", "70%", "49px"]}
      top={topValue}
      pos="absolute"
      borderRadius="20px"
      border={`2px ${isActive ? "#3498db" : "#D9D9D9"} solid`}
      {...rest}
    >
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        w={["40%", "70%", "100%"]}
        h={["40%", "70%", "100%"]}
        border="none"
        outline="none"
        bgColor="#D9D9D9"
        borderRadius="18px"
        padding="0 16px"
        fontSize={["md", "lg", "xl"]}
        fontFamily="Inter"
        fontWeight={700}
        color="#342F2F"
      />
    </Box>
  );
};
