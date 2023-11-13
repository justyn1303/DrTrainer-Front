import React from "react";
import { Box, BoxProps, Link } from "@chakra-ui/react";

interface TextWithLinkProps extends BoxProps {
  text: string;
  linkText: string;
  linkHref: string;
}

export const TextWithLink: React.FC<TextWithLinkProps> = ({
  text,
  linkText,
  linkHref,
  ...rest
}) => {
  return (
    <Box
      className="NieMaszKontaZarejestrujSie"
      w={["220px%", "260px", "317px"]}
      h={["15px", "20px", "25px"]}
      top="525px"
      pos="relative"
      textAlign="center"
      color="#D9D9D9"
      fontSize={["5px", "10px", "15px"]}
      fontFamily="Inter"
      fontWeight="700"
      textTransform="uppercase"
      wordWrap="break-word"
      {...rest}
    >
      {text} <Link href={linkHref}>{linkText}</Link>
    </Box>
  );
};
