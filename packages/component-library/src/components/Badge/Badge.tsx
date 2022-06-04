import styled from "styled-components";
import { variant } from "styled-system";

const variants = {
  default: {
    backgroundColor: "gray2",
    color: "gray11",
  },
  error: {
    backgroundColor: "red3",
    color: "red11",
  },
  success: {
    backgroundColor: "green4",
    color: "green11",
  },
  warning: {
    backgroundColor: "orange3",
    color: "orange11",
  },
};

export type BadgeProps = {
  variant?: keyof typeof variants;
};

export const Badge = styled("span")<BadgeProps>(
  (props) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "max-content",
    borderRadius: props.theme.radii.small,
    padding: `${props.theme.space.tiny} ${props.theme.space.small}`,
  }),
  variant({ variants })
);

Badge.defaultProps = {
  variant: "default",
};
