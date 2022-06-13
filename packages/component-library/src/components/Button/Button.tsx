/** @jsxImportSource theme-ui */

import React, { ComponentProps } from "react";
import { ThemeUIStyleObject, Button as ThemeUiButton } from "theme-ui";

export type ButtonProps = {
  variant?: string;
  children: React.ReactNode;
};

export const buttonStyles: ThemeUIStyleObject = {
  borderRadius: "soft",
  border: "none",
  py: "1",
  px: "2",
  fontSize: 4,
  cursor: "pointer",
  userSelect: "none",
  display: "flex",
  minHeight: "44px",
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
  ...restProps
}: ButtonProps & React.ComponentPropsWithRef<"button">) => {
  return (
    <ThemeUiButton {...restProps} sx={{ ...buttonStyles, variant }}>
      {children}
    </ThemeUiButton>
  );
};

export const Button = React.forwardRef<
  HTMLButtonElement,
  ComponentProps<typeof StyledButton>
>((props, forwardedRef) => {
  return (
    <StyledButton {...props} ref={forwardedRef} children={props.children} />
  );
});

Button.displayName = "Button";
