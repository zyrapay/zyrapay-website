import React, { useRef } from "react";
import styles from "./Modal.module.scss";
import { Xd } from "iconsax-reactjs";

type Position =
  | "center"
  | "top-left"
  | "top-right"
  | "top-middle"
  | "bottom-left"
  | "bottom-right"
  | "bottom-middle"
  | "left-middle"
  | "right-middle";

type ModalProps = {
  children: React.ReactNode;
  id: string;
  position?: Position;
  showCloseButton?: boolean;
};

const Modal = ({
  children,
  id,
  position = "center",
  showCloseButton = true,
}: ModalProps) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    popoverRef.current?.hidePopover();
  };

  return (
    <div id={id} popover="auto" ref={popoverRef} className={styles.popover}>
      <div
        className={`${styles.popover_content} ${
          styles[position.replace("-", "_")]
        }`}
      >
        {showCloseButton && (
          <button
            type="button"
            className={styles.close_button}
            onClick={handleClose}
            aria-label="Close modal"
          >
            <Xd />
          </button>
        )}

        {children}
      </div>
    </div>
  );
};

export default Modal;