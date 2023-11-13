import React from "react";
import { PageWrapper } from "../../components/PageWrapper";
import { HeaderTitle } from "../../components/HeaderTitle";
import { RegisterPanel } from "./components/RegisterPanel";

interface RegisterViewProps {}

export const RegisterView: React.FC<RegisterViewProps> = () => {
  return (
    <PageWrapper>
      <HeaderTitle />
      <RegisterPanel />
    </PageWrapper>
  );
};
