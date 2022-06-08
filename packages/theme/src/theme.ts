import * as tokens from "@mira-ds/design-tokens";
import type { Theme } from "theme-ui";

export const theme: Theme = {
  fonts: {
    body: '"Inter", sans-serif',
    heading: '"Inter", sans-serif',
  },
  fontWeights: tokens.fontWeights,
  borderWidths: {
    1: "1px",
    2: "2px",
    3: "5px",
    4: "10px",
    5: "25px",
  },
  radii: tokens.radii,
  colors: {
    text: tokens.colors.blue5Dark,
    background: tokens.colors.blue5,
    primary: tokens.colors.orange3,
    hiContrast: "white",
    loContrast: "gray",
  },
  breakpoints: Object.values(tokens.mediaQueries),
  buttons: {
    primary: {
      backgroundColor: tokens.colors.blue4,
    },
    secondary: {
      backgroundColor: tokens.colors.blue1,
    },
    ghost: {
      backgroundColor: tokens.colors.blue5Dark,
    },
  },
  cards: {},
  lineHeights: {},
  fontSizes: tokens.fontSizes,
  space: tokens.spacing,
  zIndices: {
    beneath: -1,
    normal: "auto",
    onTop: 10,
  },
};
