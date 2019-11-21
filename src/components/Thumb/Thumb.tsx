import React, { useCallback, useReducer } from "react";
import styled from "styled-components/macro";

import { Image, Props as ImageProps } from "../Image";
import { Modal } from "../Modal";
import { Base as Button } from "../Button";

const Container = styled(Button)`
  display: block;
  width: 100%;
  height: 100%;
  cursor: zoom-in;
`;

interface Props extends ImageProps {}

enum Mode {
  Resting,
  Zoomed
}

enum Actions {
  Open,
  Close
}

interface State {
  mode: Mode;
}

type Action = { type: Actions.Open } | { type: Actions.Close };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Actions.Open:
      return { ...state, mode: Mode.Zoomed };
    case Actions.Close:
      return { ...state, mode: Mode.Resting };
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
    mode: Mode.Resting
  });

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      dispatch({ type: Actions.Open });
    },
    []
  );

  const handleClose = useCallback(() => {
    dispatch({ type: Actions.Close });
  }, []);

  return (
    <>
      <Container onClick={handleClick}>
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
