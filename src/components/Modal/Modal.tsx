import styles from "./Modal.module.css";
import React from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }: { children: React.ReactNode }) {
  return createPortal(
    <div className={styles.modal}>{children}</div>,
    document.body
  );
}
