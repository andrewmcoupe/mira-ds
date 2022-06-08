/** @jsxImportSource theme-ui */

import React, { ComponentProps } from "react";
import { ThemeUIStyleObject } from "theme-ui";

const styles: ThemeUIStyleObject = {
  borderRadius: "small",
  border: "none",
  padding: "small",
  px: "medium",
  fontSize: "large",
  cursor: "pointer",
  userSelect: "none",
  display: "flex",
  minHeight: "large",
  alignItems: "center",
  justifyContent: "center",
  width: "max-content",

  "&:active": {
    opacity: 0.8,
  },

  "&:disabled": {
    cursor: "not-allowed",
    opacity: "0.4",
  },
};

const StyledButton = ({
  variant,
  children,
}: {
  variant?: string;
  children: React.ReactNode;
  ref?: React.ForwardedRef<HTMLButtonElement> | undefined;
}) => {
  return <button sx={{ ...styles, variant }}>{children}</button>;
};

export const Button = React.forwardRef<
  HTMLButtonElement,
  ComponentProps<typeof StyledButton>
>((props, forwardedRef) => {
  return <StyledButton {...props} ref={forwardedRef} />;
});

Button.displayName = "MiraButton";
