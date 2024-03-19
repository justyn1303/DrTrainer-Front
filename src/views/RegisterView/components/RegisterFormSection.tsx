import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { TextComponent } from "../../../components/TextComponent";
import { TextForm } from "../../../components/TextForm";
import { CheckboxWithLabel } from "../../../components/Checkbox";
import { ButtonComponent } from "../../../components/ButtonComponent";
import axios from "axios";

interface RegisterFormSectionProps {}

export const RegisterFormSection: React.FC<RegisterFormSectionProps> = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("/api/register", {
        username: username,
        email: email,
        password: password,
        passwordRetype: repeatPassword,
      });

      console.log("Zarejestrowano pomyślnie:", response.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Błąd rejestracji:", error.response.data);
      } else {
        console.error("Błąd rejestracji:", error);
      }
    }
  };

  return (
    <>
      <TextComponent top={["53px", "53px", "53px"]} text="Nick" fontSize={15} />
      <TextForm
        top={["85px", "85px", "85px"]}
        value={username}
        onChange={(e: string | React.ChangeEvent<HTMLInputElement>) => {
          if (typeof e === "string") {
            setUsername(e);
          } else if (e.target && typeof e.target.value === "string") {
            setUsername(e.target.value);
          }
        }}
      />
      <TextComponent
        top={["173px", "173px", "173px"]}
        text="Email"
        fontSize={15}
      />
      <TextForm
        top={["205px", "205px", "205px"]}
        value={email}
        onChange={(e: string | React.ChangeEvent<HTMLInputElement>) => {
          if (typeof e === "string") {
            setEmail(e);
          } else if (e.target && typeof e.target.value === "string") {
            setEmail(e.target.value);
          }
        }}
      />
      <TextComponent
        top={["293px", "293px", "293px"]}
        text="Hasło"
        fontSize={15}
      />
      <TextForm
        top={["325px", "235px", "325px"]}
        //type="password"
        value={password}
        onChange={(e: string | React.ChangeEvent<HTMLInputElement>) => {
          if (typeof e === "string") {
            setPassword(e);
          } else if (e.target && typeof e.target.value === "string") {
            setPassword(e.target.value);
          }
        }}
      />
      <TextComponent
        top={["413px", "413px", "413px"]}
        right="263px"
        text="Powtórz Hasło"
        fontSize={15}
      />
      <TextForm
        top={["445px", "445px", "445px"]}
        //type="password"
        value={repeatPassword}
        onChange={(e: string | React.ChangeEvent<HTMLInputElement>) => {
          if (typeof e === "string") {
            setRepeatPassword(e);
          } else if (e.target && typeof e.target.value === "string") {
            setRepeatPassword(e.target.value);
          }
        }}
      />
      <Flex justify="center">
        <ButtonComponent
          buttonText="Zarejestruj się"
          top={["555px", "555px", "535px"]}
          onClick={handleRegister}
        />
      </Flex>
    </>
  );
};
