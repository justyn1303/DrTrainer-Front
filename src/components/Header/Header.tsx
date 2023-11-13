import { Flex } from "@chakra-ui/react";
import { HamburgerMenu } from "./HamburgerMenu";
import { HEADER_X_PADDING } from "./constants";

interface HeaderProps {
  isMenu?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isMenu }) => {
  return (
    <Flex
      background="primary"
      w="100vw"
      borderBottomRadius="15px"
      pt={{ sm: "67px" }}
      pb={{ sm: "55px" }}
      boxShadow="standard"
      justifyContent={"center"}
      pos="relative"
      maxW="100%"
    >
      <Flex
        px={HEADER_X_PADDING}
        justifyContent={isMenu ? "space-between" : "center"}
        flex={1}
        align="center"
      >
        <Flex
          pr={{ base: isMenu ? `60px` : 0 }}
          pt={{ base: isMenu ? "72px" : "67px", sm: 0 }}
          pb={{ base: isMenu ? "48px" : "51px", sm: 0 }}
        ></Flex>

        {isMenu && <HamburgerMenu />}
      </Flex>
    </Flex>
  );
};
