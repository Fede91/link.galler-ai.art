import React from "react";
import { Section as TSection } from "../types";
import {
  VStack,
  Text,
  HStack,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "./Link";
import { LinkCard } from "./LinkCard";
import styled from "styled-components";

type Props = {
  section: TSection;
};

export const Section: React.FC<Props> = ({
  section: { title = "", items = [], layout = "row" },
}) => {
  const cardWrapperOverflow = useBreakpointValue(
    {
      base: "scroll",
      md: "visible",
    },
    {
      fallback: "scroll",
    }
  );
  const cardContainerFlexWrap = useBreakpointValue(
    {
      base: "nowrap",
      md: "wrap",
    },
    {
      fallback: "nowrap",
    }
  );

  return (
    <VStack marginTop="1.75rem" marginBottom="2.5rem">
      <Text fontWeight="800" textAlign="center">
        {title}
      </Text>
      {layout === "row" ? (
        <VStack w="100%" paddingTop="0.625rem">
          {items.map((item, idx) => (
            <Link
              key={idx}
              url={item.url}
              title={item.title}
              variant={item.style}
              icon={item.icon}
              imgIcon={item.imgIcon}
            />
          ))}
        </VStack>
      ) : layout === "card" ? (
        // @ts-ignore
        <HStack overflowX={cardWrapperOverflow} w="100%">
          {/* @ts-ignore */}
          <Box padding="10px" display="flex" flexWrap={cardContainerFlexWrap}>
            {items.map((item) => (
              <LinkCard
                title={item.title}
                cta={item.cta}
                description={item.description}
                url={item.url}
                img={item.img}
              />
            ))}
          </Box>
        </HStack>
      ) : null}
    </VStack>
  );
};

// style={{ display: "flex", padding: "10px" }}
// <HStack flexWrap="wrap">
