import * as tokens from "@mira-ds/design-tokens";
import type { Theme } from "theme-ui";

export const theme: Theme = {
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Inter", sans-serif',
    monospace: "Menlo, monospace",
  },
  borderWidths: {
    1: "1px",
    2: "2px",
    3: "5px",
    4: "10px",
    5: "25px",
  },
  radii: {
    small: tokens.SIZE_RADII_SMALL,
    medium: tokens.SIZE_RADII_MEDIUM,
    large: tokens.SIZE_RADII_LARGE,
  },
  colors: {
    text: tokens.COLOR_BASE_GREY_10,
    background: tokens.COLOR_BASE_WHITE,
    primary: tokens.COLOR_BASE_BLUE_9,
    hiContrast: "hsl(206,10%,5%)",
    loContrast: tokens.COLOR_BASE_WHITE,
    red1: tokens.COLOR_BASE_RED_1,
    red2: tokens.COLOR_BASE_RED_2,
    red3: tokens.COLOR_BASE_RED_3,
    red4: tokens.COLOR_BASE_RED_4,
    red5: tokens.COLOR_BASE_RED_5,
    red6: tokens.COLOR_BASE_RED_6,
    red7: tokens.COLOR_BASE_RED_7,
    red8: tokens.COLOR_BASE_RED_8,
    red9: tokens.COLOR_BASE_RED_9,
    red10: tokens.COLOR_BASE_RED_10,
    red11: tokens.COLOR_BASE_RED_11,
    red12: tokens.COLOR_BASE_RED_12,
    green1: tokens.COLOR_BASE_GREEN_1,
    green2: tokens.COLOR_BASE_GREEN_2,
    green3: tokens.COLOR_BASE_GREEN_3,
    green4: tokens.COLOR_BASE_GREEN_4,
    green5: tokens.COLOR_BASE_GREEN_5,
    green6: tokens.COLOR_BASE_GREEN_6,
    green7: tokens.COLOR_BASE_GREEN_7,
    green8: tokens.COLOR_BASE_GREEN_8,
    green9: tokens.COLOR_BASE_GREEN_9,
    green10: tokens.COLOR_BASE_GREEN_10,
    green11: tokens.COLOR_BASE_GREEN_11,
    green12: tokens.COLOR_BASE_GREEN_12,
    blue1: tokens.COLOR_BASE_BLUE_1,
    blue2: tokens.COLOR_BASE_BLUE_2,
    blue3: tokens.COLOR_BASE_BLUE_3,
    blue4: tokens.COLOR_BASE_BLUE_4,
    blue5: tokens.COLOR_BASE_BLUE_5,
    blue6: tokens.COLOR_BASE_BLUE_6,
    blue7: tokens.COLOR_BASE_BLUE_7,
    blue8: tokens.COLOR_BASE_BLUE_8,
    blue9: tokens.COLOR_BASE_BLUE_9,
    blue10: tokens.COLOR_BASE_BLUE_10,
    blue11: tokens.COLOR_BASE_BLUE_11,
    blue12: tokens.COLOR_BASE_BLUE_12,
    orange1: tokens.COLOR_BASE_ORANGE_1,
    orange2: tokens.COLOR_BASE_ORANGE_2,
    orange3: tokens.COLOR_BASE_ORANGE_3,
    orange4: tokens.COLOR_BASE_ORANGE_4,
    orange5: tokens.COLOR_BASE_ORANGE_5,
    orange6: tokens.COLOR_BASE_ORANGE_6,
    orange7: tokens.COLOR_BASE_ORANGE_7,
    orange8: tokens.COLOR_BASE_ORANGE_8,
    orange9: tokens.COLOR_BASE_ORANGE_9,
    orange10: tokens.COLOR_BASE_ORANGE_10,
    orange11: tokens.COLOR_BASE_ORANGE_11,
    orange12: tokens.COLOR_BASE_ORANGE_12,
    gray1: tokens.COLOR_BASE_GREY_1,
    gray2: tokens.COLOR_BASE_GREY_2,
    gray3: tokens.COLOR_BASE_GREY_3,
    gray4: tokens.COLOR_BASE_GREY_4,
    gray5: tokens.COLOR_BASE_GREY_5,
    gray6: tokens.COLOR_BASE_GREY_6,
    gray7: tokens.COLOR_BASE_GREY_7,
    gray8: tokens.COLOR_BASE_GREY_8,
    gray9: tokens.COLOR_BASE_GREY_9,
    gray10: tokens.COLOR_BASE_GREY_10,
    gray11: tokens.COLOR_BASE_GREY_11,
    gray12: tokens.COLOR_BASE_GREY_12,
  },
  breakpoints: ["520px", "768px", "900px", "1200px", "1800px"],
  buttons: {
    primary: {
      backgroundColor: tokens.COLOR_BASE_BLUE_9,
    },
    secondary: {
      backgroundColor: tokens.COLOR_BASE_BLUE_9,
    },
    ghost: {
      backgroundColor: tokens.COLOR_BASE_GREY_4,
    },
  },
  cards: {},
  lineHeights: {},
  fontSizes: {
    tiny: `${tokens.SIZE_FONT_TINY}rem`,
    small: `${tokens.SIZE_FONT_SMALL}rem`,
    medium: `${tokens.SIZE_FONT_MEDIUM}rem`,
    large: `${tokens.SIZE_FONT_LARGE}rem`,
    xxl: `${tokens.SIZE_FONT_XXL}rem`,
    xxxl: `${tokens.SIZE_FONT_XXXL}rem`,
  },
  space: {
    tiny: tokens.SIZE_SPACING_TINY,
    small: tokens.SIZE_SPACING_SMALL,
    medium: tokens.SIZE_SPACING_MEDIUM,
    large: tokens.SIZE_SPACING_LARGE,
    xxl: tokens.SIZE_SPACING_XXL,
    xxxl: tokens.SIZE_SPACING_XXXL,
  },
  zIndices: {
    beneath: -1,
    normal: "auto",
    onTop: 10,
  },
};
