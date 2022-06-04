import styled from "styled-components";
import { variant } from "styled-system";

const DEFAULT_TAG = "h1";

const variants = {
  default: {
    background: "none",
  },
  emphasis: {
    background:
      "linear-gradient(90deg, rgba(75,195,137,1) 35%, rgba(0,106,219,1) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
};

export const Heading = styled(DEFAULT_TAG)<{ variant?: keyof typeof variants }>(
  variant({ variants }),
  ({ theme }) => ({
    margin: 0,
    fontSize: theme.fontSizes.xl,
    overflowWrap: "break-word",
    fontWeight: theme.fontWeights.bold,
    marginBottom: theme.space.large,
  })
);

Heading.defaultProps = {
  variant: "default",
};
