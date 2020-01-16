import React from "react";

export const Text = ({ children, style, className, nb }) => {
  console.log(children);
  return nb ? (
    <span className={className} style={{ ...style }}>
      {children}
    </span>
  ) : (
    <p className={className} style={{ ...style }}>
      {children}
    </p>
  );
};
