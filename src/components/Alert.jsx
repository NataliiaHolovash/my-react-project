// src/components/Alert.jsx

import clsx from "clsx";
import "./Alert.css";

export default function Alert  ({ variant, outlined, elevated, children }) {
  return (
    <p
      className={clsx("alert", variant, {
        "is-outlined": outlined,
        "is-elevated": elevated,
      })}
    >
      {children}
    </p>
  );
}
