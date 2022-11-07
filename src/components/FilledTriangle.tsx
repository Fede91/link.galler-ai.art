import React from "react";
import Img from "../assets/img/triangle_filled.png";
import styled from "styled-components";

export const FilledTriangle: React.FC = () => (
  <StyledImg src={Img} alt="blob" />
);

const StyledImg = styled.img`
  position: fixed;
  top: 35%;
  left: -10%;
  z-index: -5;
`;
