import { MiraThemeProvider } from "@mira-ds/theme-provider";
import * as tokens from "@mira-ds/design-tokens";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
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
            config: {
              initialColorModeName: "light",
              useBorderBox: true,
              useColorSchemeMediaQuery: true,
            },
            fonts: {
              body: '"Inter", sans-serif',
              heading: '"Inter", sans-serif',
            },
            fontWeights: {
              ...tokens.fontWeights,
              heading: tokens.fontWeights.bold,
            },
            radii: tokens.radii,
            colors: {
              modes: {
                dark: {
                  textColorButtonPrimary: tokens.colors.blue5Dark,
                  textColorButtonSecondary: tokens.colors.blue5,
                  primary: tokens.colors.orange3,
                },
              },
              textColorButtonPrimary: tokens.colors.blue5Dark,
              textColorButtonSecondary: tokens.colors.blue5,
              bodyTextColorEmphasis: tokens.colors.orange2,
              primary: tokens.colors.blue4,
              secondary: tokens.colors.blue5Dark,
            },
            fontSizes: tokens.fontSizes,
            space: tokens.spacing,
            zIndices: {
              beneath: -1,
              normal: "auto",
              onTop: 10,
            },
            breakpoints: Object.values(tokens.mediaQueries),
            /* Element variant styles */
            buttons: {
              primary: {
                backgroundColor: "primary",
                color: "textColorButtonPrimary",
              },
              secondary: {
                backgroundColor: "secondary",
                color: "textColorButtonSecondary",
              },
              tertiary: {
                backgroundColor: "transparent",
                color: "textColorButtonSecondary",
              },
            },
            badges: {
              primary: {
                backgroundColor: "primary",
                color: "white",
              },
              secondary: {
                backgroundColor: "secondary",
              },
              ghost: {
                backgroundColor: tokens.colors.blue5Dark,
              },
            },
            text: {
              heading: {
                color: "primary",
                margin: 0,
                fontSize: 8,
                overflowWrap: "break-word",
                marginBottom: 4,
              },
              h1: {
                variant: "text.heading",
                fontSize: 8,
              },
              h2: {
                variant: "text.heading",
                fontSize: 6,
              },
              h3: {
                variant: "text.heading",
                fontSize: 5,
              },
              h4: {
                variant: "text.heading",
                fontSize: 4,
              },
              h5: {
                variant: "text.heading",
                fontSize: 3,
              },
              h6: {
                variant: "text.heading",
                fontSize: 2,
              },
              emphasis: {
                variant: "text.heading",
                background: (theme) =>
                  `linear-gradient(90deg, ${theme.colors.primary} 35%, ${theme.colors.secondary} 100%)`,

                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            },
          }}
        >
          <Story />
        </MiraThemeProvider>
      </>
    );
  },
];
