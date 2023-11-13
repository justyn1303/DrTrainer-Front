import React, { useEffect } from "react";
import { Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Screen404nProps {
  mainPageUrl?: string;
}

export const Screen404: React.FC<Screen404nProps> = ({ mainPageUrl }) => {
  useEffect(() => {
    document.title = "Nie znaleziono strony";
  }, []);

  return (
    <VStack minH="375px" justify="center" pb={{ base: "50px", md: 0 }}>
      <VStack
        w={{ md: "500px", lg: "698px" }}
        h={{ md: "245px" }}
        borderWidth={{ md: "2px" }}
        borderColor="primary"
        borderRadius="standard"
        bg={{ md: "background" }}
        pos={{ md: "relative" }}
        alignItems={{ base: "center", md: "end" }}
        pr={{ md: "40px", lg: "116px" }}
        pt={{ md: "51px" }}
        justify={{ base: "center", md: "start" }}
      >
        <Image
          position={{ md: "absolute" }}
          src="../assets/ERROR.png"
          left={{ md: "-275px", lg: "-298px" }}
          top={{ md: "-105px", lg: "-120px" }}
        />
        <VStack gap={0}>
          <Text textStyle="title" color="primary" pb="15px">
            Błąd 404
          </Text>
          <Text textStyle="largeText" fontWeight="bold" color="primary">
            Nie znaleziono strony
          </Text>
          <Link to={mainPageUrl ?? "/"}>
            <Text textStyle="largeText" fontWeight="bold" color="accent">
              Przejdź na stronę główną {">>"}
            </Text>
          </Link>
        </VStack>
      </VStack>
    </VStack>
  );
};
