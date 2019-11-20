import React from "react";
import styled from "styled-components/macro";

const Iframe = styled.iframe`
  width: 100%;
  height: 40rem;
  border: 0;
`;

interface Props {
  url: string;
}

export const Link: React.FC<Props> = ({ url }) => <Iframe src={url} />;
