import React from "react";

export const Text = ({ children, style, className, nb }) => {
  return nb ? (
    <span
      className={className}
      style={{ fontFamily: className ? null : "ubuntu", ...style }}
    >
      {children}
    </span>
  ) : (
    <p
      className={className}
      style={{ fontFamily: className ? null : "ubuntu", ...style }}
    >
      {children}
    </p>
  );
};
