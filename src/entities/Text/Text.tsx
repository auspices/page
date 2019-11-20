import React from "react";
import styled from "styled-components/macro";

import { simpleFormat } from "../../lib/simpleFormat";

const Container = styled.div<{ size: string | null }>`
  padding: 0 2rem;
  font-family: "Times New Roman", Times, serif;
  font-size: 1.125rem;

  > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  > * + * {
    margin-top: 1rem;
  }

  ${({ size }) =>
    size === "headline" &&
    `
    font-size: 3rem;
  `}
`;

interface Props {
  body: string;
  size: "headline" | string | null;
}

export const Text: React.FC<Props> = ({ size, body }) => (
  <Container
    size={size}
    dangerouslySetInnerHTML={{
      __html: simpleFormat(body)
    }}
  />
);
