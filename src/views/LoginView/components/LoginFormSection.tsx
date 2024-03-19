import React, { ChangeEvent, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { TextComponent } from "../../../components/TextComponent";
import { TextForm } from "../../../components/TextForm";
import { CheckboxWithLabel } from "../../../components/Checkbox";
import { ButtonComponent } from "../../../components/ButtonComponent";
import axios from "axios";

interface LoginFormSectionProps {}

export const LoginFormSection: React.FC<LoginFormSectionProps> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", {
        username: username,
        password: password,
      });

      console.log("You have logged in successfully:", response.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Login error:", error.response.data);
      } else {
        console.error("Login error:", error);
      }
    }
  };

  return (
    <>
      <TextComponent top={["53px", "53px", "53px"]} text="Nick" fontSize={15} />
      <TextForm
        top={["85px", "85px", "85px"]}
        value={username}
        onChange={(e: string | ChangeEvent<HTMLInputElement>) => {
          if (typeof e === "string") {
            setUsername(e);
          } else if (e.target && typeof e.target.value === "string") {
            setUsername(e.target.value);
          }
        }}
      />
      <TextComponent
        top={["173px", "173px", "173px"]}
        text="Hasło"
        fontSize={15}
      />
      <TextForm
        top={["205px", "205px", "205px"]}
        // type="password"
        value={password}
        onChange={(e: string | React.ChangeEvent<HTMLInputElement>) => {
          if (typeof e === "string") {
            setPassword(e);
          } else if (e.target && typeof e.target.value === "string") {
            setPassword(e.target.value);
          }
        }}
      />
      <CheckboxWithLabel top={["305px", "305px", "305px"]} />
      <Flex justify="center">
        <ButtonComponent
          top={["405px", "405px", "405px"]}
          onClick={handleLogin}
        />
      </Flex>
    </>
  );
};
