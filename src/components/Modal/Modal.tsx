import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import styled from "styled-components/macro";

import { CloseButton } from "../CloseButton";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  > * {
    margin: auto;
  }
`;

const Close = styled(CloseButton)`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 101;
  cursor: zoom-out;
`;

interface Props {
  onClose(): void;
}

export const Modal: React.FC<Props> = ({ children, onClose }) => {
  const el = useRef(document.createElement("div"));

  const handleKeydown = React.useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          return onClose();
        default:
          break;
      }
    },
    [onClose]
  );

  useEffect(() => {
    const _el = el.current;

    document.body.appendChild(_el);
    disableBodyScroll(_el);
    window.addEventListener("keydown", handleKeydown);

    return () => {
      _el && _el.parentElement && _el.parentElement.removeChild(_el);
      clearAllBodyScrollLocks();
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [handleKeydown]);

  return createPortal(
    <Backdrop onClick={onClose}>
      <Close onClick={onClose} />
      {children}
    </Backdrop>,
    el.current
  );
};
