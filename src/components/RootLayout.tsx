import React from "react";
import styled from "styled-components";
import { VStack, Text, HStack } from "@chakra-ui/react";
import PrimaryBkg from "../assets/img/Blob_Primary.png";
import SecondaryBkg from "../assets/img/Blob_Secondary.png";

type Props = {
  children?: React.ReactNode;
};

export const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <StyledContainer id="main" w="100%" minH="100vh">
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled(VStack)`
  background-image: url(${PrimaryBkg}), url(${SecondaryBkg});
  background-position: -300px -600px, 180% -400px;
  background-repeat: no-repeat, no-repeat;
`;
