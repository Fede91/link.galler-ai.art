import React from "react";
import Img from "../assets/img/fd_logo.png";
import styled from "styled-components";

export const FooterLogo: React.FC = () => (
  <StyledImg src={Img} alt="FeDesign logo" />
);

const StyledImg = styled.img`
  height: 2rem;
  width: auto;
`;
