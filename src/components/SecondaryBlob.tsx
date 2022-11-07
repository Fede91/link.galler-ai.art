import React from "react";
import Img from "../assets/img/Blob_Secondary.png";
import styled from "styled-components";

export const SecondaryBlob: React.FC = () => <StyledImg src={Img} alt="blob" />;

const StyledImg = styled.img`
  position: fixed;
  z-index: -10;
  top: -200px;
  right: -135px;
`;
