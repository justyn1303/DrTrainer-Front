import React from "react";
import { PageWrapper } from "../../components/PageWrapper";
import { Header } from "../../components/Header/Header";
import { HamburgerMenu } from "../../components/Header/HamburgerMenu";

interface LearningModelViewProps {}

export const LearningModelView: React.FC<LearningModelViewProps> = () => {
  return (
    <PageWrapper>
      <Header />
      <HamburgerMenu />
    </PageWrapper>
  );
};
