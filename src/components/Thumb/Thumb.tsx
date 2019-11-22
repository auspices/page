import React, { useCallback, useReducer, useEffect } from "react";
import styled from "styled-components/macro";

import { Image, Props as ImageProps } from "../Image";
import { Modal } from "../Modal";
import { Base as Button } from "../Button";

const Container = styled(Button)<{ width: string; height: string }>`
  display: block;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  cursor: zoom-in;

  &:focus {
    outline: 0;
  }
`;

interface Props extends ImageProps {}

enum Mode {
  Resting,
  Zoomed
}

enum Actions {
  Open,
  Close,
  Resize
}

interface State {
  mode: Mode;
  limit: number;
}

type Action =
  | { type: Actions.Open }
  | { type: Actions.Close }
  | { type: Actions.Resize; payload: { width: number } };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Actions.Open:
      return { ...state, mode: Mode.Zoomed };
    case Actions.Close:
      return { ...state, mode: Mode.Resting };
    case Actions.Resize:
      return { ...state, limit: action.payload.width };
  }
};

export const Thumb: React.FC<Props> = ({
  children,
  width,
  height,
  urls,
  ...rest
}) => {
  const [state, dispatch] = useReducer(reducer, {
    mode: Mode.Resting,
    limit: window.innerWidth
  });

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      dispatch({ type: Actions.Open });
    },
    []
  );

  const handleClose = useCallback(() => dispatch({ type: Actions.Close }), []);
  const handleResize = useCallback(
    () =>
      dispatch({ type: Actions.Resize, payload: { width: window.innerWidth } }),
    []
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <>
      <Container
        onClick={handleClick}
        width={state.limit >= width ? `${width}px` : "100%"}
        height={state.limit >= width ? `${height}px` : "100%"}
      >
        <Image
          responsive={false}
          width={width as number}
          height={height as number}
          urls={urls}
          {...rest}
        />
      </Container>

      {state.mode === Mode.Zoomed && (
        <Modal onClose={handleClose}>{children}</Modal>
      )}
    </>
  );
};
