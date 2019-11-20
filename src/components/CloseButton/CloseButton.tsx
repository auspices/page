import React from "react";
import styled from "styled-components/macro";

import { Base } from "../Button";

const Button = styled(Base)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.25);
  transition: background-color 100ms;

  &:hover {
    background-color: black;
  }

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 50%;
    height: 2px;
    background-color: white;
    top: 50%;
    left: 50%;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

export const CloseButton: React.FC<React.ButtonHTMLAttributes<
  HTMLButtonElement
>> = ({ ...props }) => {
  return <Button {...props} />;
};
