import React from "react";
import styled, { keyframes } from "styled-components/macro";

const fade = keyframes`
  50% {
    opacity: 0.25;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  z-index: 10000;

  & > span {
    position: relative;
    top: -1px;
    font-size: 0.5rem;
    opacity: 1;
    color: darkgray;
  }

  & > span:nth-of-type(1) {
    animation: 1s ${fade} infinite 0.3333s;
  }

  & > span:nth-of-type(2) {
    animation: 1s ${fade} infinite 0.6666s;
  }

  & > span:nth-of-type(3) {
    animation: 1s ${fade} infinite 0.9999s;
    padding-right: 0.25em;
  }
`;

export const Loading: React.FC = () => (
  <Container>
    <span>●</span> <span>●</span> <span>●</span>
  </Container>
);
