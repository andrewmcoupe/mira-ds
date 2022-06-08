import { MiraThemeProvider } from "@mira-ds/theme-provider";
import * as tokens from "@mira-ds/design-tokens";
import "@fontsource/inter";
import { Global } from "@emotion/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const GlobalStyles = () => (
  <Global
    styles={(theme) => ({
      "*": {
        fontFamily: "Inter",
        boxSizing: "border-box",
        margin: 0,
      },
      "*::before": {
        boxSizing: "border-box",
      },
      "*::after": {
        boxSizing: "border-box",
      },
      body: {
        lineHeight: "1.5",
        WebkitFontSmoothing: "antialiased",
      },
      "img, picture, svg, video, canvas": {
        display: "block",
        maxWidth: "100%",
      },
    })}
  />
);

export const decorators = [
  (Story) => {
    return (
      <>
        <GlobalStyles />
        <MiraThemeProvider
          theme={{
            fonts: {
              body: "system-ui, sans-serif",
              heading: '"Inter", sans-serif',
              monospace: "Menlo, monospace",
            },
            borderWidths: {
              tiny: "1px",
              small: "2px",
              medium: "5px",
              large: "10px",
              xl: "25px",
            },
            radii: {
              small: tokens.SIZE_RADII_SMALL,
              medium: tokens.SIZE_RADII_MEDIUM,
              large: tokens.SIZE_RADII_LARGE,
            },
            config: {
              initialColorModeName: "light",
              useBorderBox: true,
              useLocalStorage: true,
            },
            colors: {
              modes: {
                dark: {},
              },
              textColorPrimary: tokens.COLOR_BASE_WHITE,
              textColorSecondary: tokens.COLOR_BASE_GREY_11,
              primary: tokens.COLOR_BASE_BLUE_9,
              secondary: tokens.COLOR_BASE_BLUE_5,
              ghost: tokens.COLOR_BASE_GREY_3,
            },

            breakpoints: ["520px", "768px", "1020px", "1260px"],
            badges: {
              primary: {
                background: "primary",
                color: "textColorPrimary",
              },
              secondary: {
                background: "secondary",
                color: "textColorSecondary",
              },
              ghost: {
                background: "badgeBgGhost",
                color: "textColorSecondary",
              },
            },
            buttons: {
              primary: {
                backgroundImage: (theme) =>
                  `linear-gradient(to right, ${theme.colors?.primary} 0%, ${theme.colors?.secondary}  100%)`,
                color: "textColorPrimary",
                backgroundSize: "200% auto",
                transition: "background-position 0.5s ease-in-out",
                "&:hover": {
                  backgroundPosition: "right center",
                },
              },
              secondary: {
                backgroundColor: "secondary",
                color: "textColorSecondary",
              },
              ghost: {
                backgroundColor: "buttonBgGhost",
              },
            },
            lineHeights: {},
            fontSizes: {
              tiny: `${tokens.SIZE_FONT_TINY}rem`,
              small: `${tokens.SIZE_FONT_SMALL}rem`,
              medium: `${tokens.SIZE_FONT_MEDIUM}rem`,
              large: `${tokens.SIZE_FONT_LARGE}rem`,
              xl: `${tokens.SIZE_FONT_XL}rem`,
              xxl: `${tokens.SIZE_FONT_XXL}rem`,
            },
            space: {
              tiny: tokens.SIZE_SPACING_TINY,
              small: tokens.SIZE_SPACING_SMALL,
              medium: tokens.SIZE_SPACING_MEDIUM,
              large: tokens.SIZE_SPACING_LARGE,
              xl: tokens.SIZE_SPACING_XL,
              xxl: tokens.SIZE_SPACING_XXL,
            },
            zIndices: {
              beneath: -1,
              normal: "auto",
              onTop: 10,
            },
          }}
        >
          <Story />
        </MiraThemeProvider>
      </>
    );
  },
];
