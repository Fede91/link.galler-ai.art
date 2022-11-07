import React from "react";
import Img from "../assets/img/triangle_stroked.png";
import styled from "styled-components";

export const StrokedTriangle: React.FC = () => (
  <StyledImg src={Img} alt="blob" />
);

const StyledImg = styled.img`
  position: fixed;
  right: -30%;
  bottom: -25%;
  z-index: -5;
`;
