import React, { useRef, useCallback, useState } from "react";
import styled, { keyframes } from "styled-components/macro";

import { AspectRatioBox } from "../AspectRatioBox";
import { useLazyValue } from "../../hooks/useLazyValue";

type Status = "pending" | "ready";

const ResponsiveContainer = styled(AspectRatioBox)<{
  treatment?: string | null;
}>`
  position: relative;
  display: inline-flex;
  background-size: cover;
  background-position: center center;
  background-color: lightgray;
  ${({ treatment }) =>
    treatment === "outline" &&
    `
      border: 1px solid lightgray;
  `}
`;

const Img = styled.img<{ status: Status }>`
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 200ms;

  ${({ status }) =>
    status === "ready" &&
    `
    opacity: 1;
  `}
`;

const pulse = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const StatusIndicator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0.5rem;
  height: 0.5rem;
  background-color: white;
  border-radius: 50%;
  animation: ${pulse} 500ms infinite;
  mix-blend-mode: difference;
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
  caption?: string | null;
  fallbackUrl?: string;
  treatment?: string | null;
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
  treatment,
  ...rest
}) => {
  const ref = useRef<HTMLImageElement>(null);
  const [visible] = useLazyValue(true, ref);
  const [status, setStatus] = useState<Status>("pending");

  const handleLoad = useCallback(() => setStatus("ready"), []);

  return (
    <ResponsiveContainer
      aspectHeight={height}
      aspectWidth={width}
      maxHeight={height}
      maxWidth={width}
      treatment={treatment}
      style={{
        ...(fallbackUrl ? { backgroundImage: `url(${fallbackUrl})` } : null)
      }}
      {...rest}
    >
      {status === "pending" && <StatusIndicator />}
      {caption && <Caption>{caption}</Caption>}
      <Img
        status={status}
        ref={ref}
        src={visible ? urls._1x : PENDING_SRC}
        srcSet={visible ? `${urls._1x} 1x, ${urls._2x} 2x` : PENDING_SRC}
        alt={alt}
        onLoad={handleLoad}
      />
    </ResponsiveContainer>
  );
};
