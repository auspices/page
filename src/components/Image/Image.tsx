import React from "react";
import styled from "styled-components/macro";

import { AspectRatioBox } from "../AspectRatioBox";

const ResponsiveContainer = styled(AspectRatioBox)`
  position: relative;
  display: inline-flex;
  background-size: cover;
  background-position: center center;
  background-color: lightgray;
`;

const Container = styled.div`
  position: relative;
  display: inline-flex;
`;

const Img = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

const Caption = styled.h4`
  position: absolute;
  top: 100%;
  left: 0;
  margin: 0.5rem;
  font-size: 0.75rem;
  vertical-align: bottom;
`;

export interface Props {
  responsive?: boolean;
  height: number;
  width: number;
  urls: {
    _1x: string;
    _2x: string;
  };
  alt?: string;
  caption?: string;
  fallbackUrl?: string;
}

export const Image: React.FC<Props> = ({
  responsive = true,
  height,
  width,
  urls,
  fallbackUrl,
  alt,
  caption,
  ...rest
}) => {
  return responsive ? (
    <ResponsiveContainer
      aspectHeight={height}
      aspectWidth={width}
      maxHeight={height}
      maxWidth={width}
      style={{ backgroundImage: `url(${fallbackUrl})` }}
      {...rest}
    >
      {caption && <Caption>{caption}</Caption>}
      <Img src={urls._1x} srcSet={`${urls._1x} 1x, ${urls._2x} 2x`} alt={alt} />
    </ResponsiveContainer>
  ) : (
    <Container>
      <Img
        src={urls._1x}
        srcSet={`${urls._1x} 1x, ${urls._2x} 2x`}
        alt={alt}
        {...rest}
      />
      {caption && <Caption>{caption}</Caption>}
    </Container>
  );
};
