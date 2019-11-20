import React from "react";
import styled from "styled-components/macro";
import { scale } from "proportional-scale";

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  aspectWidth: number;
  aspectHeight: number;
  maxWidth: number;
  maxHeight: number;
}

export const AspectRatioBox: React.FC<Props> = ({
  aspectWidth,
  aspectHeight,
  maxWidth,
  maxHeight,
  children,
  style,
  ...rest
}) => {
  const { width, paddingBottom } = scale({
    width: aspectWidth,
    height: aspectHeight,
    maxWidth,
    maxHeight
  });

  return (
    <Container style={{ maxWidth: `${width}px`, ...style }} {...rest}>
      <Wrapper style={{ paddingBottom }} />
      <Content>{children}</Content>
    </Container>
  );
};
