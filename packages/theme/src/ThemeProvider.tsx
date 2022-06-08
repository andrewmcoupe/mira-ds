import { ThemeProvider, Theme } from "theme-ui";
import { Global } from "@emotion/react";
import { theme } from "./theme";

export const DEFAULT_THEME = theme;

export const GlobalStyles = () => (
  <Global
    styles={(theme) => ({
      "*": {
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

export const MiraThemeProvider = ({
  children,
  theme,
}: {
  theme?: Theme;
  children: any;
}) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme ?? DEFAULT_THEME}>{children}</ThemeProvider>
  </>
);
