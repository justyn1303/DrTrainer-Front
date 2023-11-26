import React, { useRef } from "react";
import { Box } from "@chakra-ui/react";
import { SmallButtonComponent } from "./SmallButtonComponent";

interface ImageButtonProps {
  buttonText: string;
  onButtonClick: () => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ImageButton: React.FC<ImageButtonProps> = ({
  buttonText,
  onButtonClick,
  onInputChange,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Box
      top="100px"
      right="100px"
      cursor="pointer"
      overflow="hidden"
      width="100px"
      height="40px"
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={onInputChange}
        style={{
          opacity: 0,
          width: "100%",
          height: "100%",
          cursor: "pointer",
          top: 0,
          left: 0,
        }}
      />
      <SmallButtonComponent
        buttonText={buttonText}
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.click();
          }
          onButtonClick();
        }}
      />
    </Box>
  );
};
