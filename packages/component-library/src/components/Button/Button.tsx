import React from "react";
import styled from "styled-components";
import { ComponentProps } from "react";
import { variant } from "styled-system";

const variants = {
  default: {
    backgroundColor: "gray3",
  },
  error: {
    backgroundColor: "red7",
  },
  success: {
    backgroundColor: "green7",
  },
  warning: {
    backgroundColor: "orange6",
  },
};

const StyledButton = styled("button")<{ variant?: keyof typeof variants }>(
  ({ theme }) => ({
    borderRadius: theme.radii.small,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: theme.colors.gray9,
    padding: `0 ${theme.space.medium}`,
    fontSize: theme.fontSizes.large,
    color: theme.colors.hiContrast,
    cursor: "pointer",
    userSelect: "none",
    display: "flex",
    minHeight: theme.space.xxl,
    alignItems: "center",
    justifyContent: "center",
    width: "max-content",
    boxShadow: `2px 2px 0 0px ${theme.colors.gray9}`,
    transition: "transform, box-shadow, 0.2s ease-in-out",

    "&:hover": {
      transform: "translate(-1px, -1px)",
      boxShadow: `4px 4px 8px 1px ${theme.colors.gray9}`,
    },

    "&:active": {
      transform: "translate(2px, 2px)",
      boxShadow: "none",
    },

    "&:disabled": {
      cursor: "not-allowed",
      opacity: "0.4",
    },
  }),
  variant({ variants })
);

export const Button = React.forwardRef<
  HTMLButtonElement,
  ComponentProps<typeof StyledButton>
>((props, forwardedRef) => {
  return <StyledButton {...props} ref={forwardedRef} />;
});

Button.displayName = "Button";
Button.defaultProps = {
  variant: "default",
};
