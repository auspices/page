import React, { useRef } from "react";
import styled from "styled-components/macro";

import { AspectRatioBox } from "../AspectRatioBox";
import { useLazyValue } from "../../hooks/useLazyValue";

const ResponsiveContainer = styled(AspectRatioBox)`
  position: relative;
  display: inline-flex;
  background-size: cover;
  background-position: center center;
  background-color: lightgray;
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

const PENDING_SRC = "//:0";

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
  const ref = useRef<HTMLImageElement>(null);
  const [visible] = useLazyValue(true, ref);

  return (
    <ResponsiveContainer
      aspectHeight={height}
      aspectWidth={width}
      maxHeight={height}
      maxWidth={width}
      style={{ backgroundImage: `url(${fallbackUrl})` }}
      {...rest}
    >
      {caption && <Caption>{caption}</Caption>}

      <Img
        ref={ref}
        src={visible ? urls._1x : PENDING_SRC}
        srcSet={visible ? `${urls._1x} 1x, ${urls._2x} 2x` : PENDING_SRC}
        alt={alt}
      />
    </ResponsiveContainer>
  );
};
