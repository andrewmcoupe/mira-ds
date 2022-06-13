/** @jsxImportSource theme-ui */

import React, { ComponentProps } from "react";
import { Button, buttonStyles } from "../Button/Button";
import * as Icons from "@radix-ui/react-icons";

type IconButtonProps = {
  icon: keyof typeof Icons;
  children?: React.ReactNode;
} & Omit<ComponentProps<typeof Button>, "children"> &
  React.ComponentPropsWithRef<"button">;

export const StyledButton = (props: IconButtonProps) => {
  const Icon = Icons[props.icon];

  return (
    <button {...props} sx={{ ...buttonStyles, variant: props.variant }}>
      <Icon />
      {props.children ? <span sx={{ ml: 1 }}>{props.children}</span> : null}
    </button>
  );
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, forwardedRef) => {
    return <StyledButton {...props} ref={forwardedRef} />;
  }
);
