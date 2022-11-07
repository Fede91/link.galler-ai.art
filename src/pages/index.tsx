import * as React from "react";
import {
  VStack,
  Container,
  ChakraProvider,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";
import data from "../content/data.json";
import Fonts from "../fonts";
import theme from "../theme";
import { Data } from "../types";
import { PrimaryBlob } from "../components/PrimaryBlob";
import { SecondaryBlob } from "../components/SecondaryBlob";
import { Avatar } from "../components/Avatar";
import { FilledTriangle } from "../components/FilledTriangle";
import { StrokedTriangle } from "../components/StrokedTriangle";
import { Section } from "../components/Section";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { RootLayout } from "../components/RootLayout";
import { FooterLogo } from "../components/FooterLogo";

library.add(fab);

const IndexPage = () => {
  const { hero, sections }: Data = data;
  return (
    <ChakraProvider theme={theme}>
      <RootLayout>
        {/* <PrimaryBlob />
        <SecondaryBlob /> */}
        <Fonts />
        <FilledTriangle />
        <StrokedTriangle />
        <VStack alignItems="center" minH="100%" w="100%">
          <Container
            w="100%"
            maxW="xl"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Avatar />
            <Heading fontSize="2.5rem" fontWeight="400">
              {hero.name}
            </Heading>
            <Text fontSize="1.25rem">{hero.bio}</Text>
          </Container>
          <Container w="100%" maxW="xl">
            {sections.map((section, index) => (
              <Section key={index} section={section} />
            ))}
          </Container>

          <HStack paddingBottom="3rem">
            <FooterLogo />
          </HStack>
        </VStack>
      </RootLayout>
    </ChakraProvider>
  );
};

export default IndexPage;
