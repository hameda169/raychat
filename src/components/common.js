import React from "react";

export const Text = ({ children, style, className }) => {
  console.log(children);
  return (
    <p className={className} style={{ ...style }}>
      {children}
    </p>
  );
};
