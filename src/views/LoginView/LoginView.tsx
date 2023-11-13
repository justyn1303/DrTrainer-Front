import React from "react";
import { PageWrapper } from "../../components/PageWrapper";
import { HeaderTitle } from "../../components/HeaderTitle";
import { LoginPanel } from "./components/LoginPanel";

interface LoginViewProps {}

export const LoginView: React.FC<LoginViewProps> = () => {
  return (
    <PageWrapper>
      <HeaderTitle />
      <LoginPanel />
    </PageWrapper>
  );
};
