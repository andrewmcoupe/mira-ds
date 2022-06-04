import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { ASSET_FONT_INTER_TTF } from "@mira-ds/design-tokens";

const DEFAULT_THEME = theme;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url(${ASSET_FONT_INTER_TTF}) format('truetype'),
  }

  * { 
    margin: 0; 
    font-family: "Inter", sans-serif;
  }

  *::before {
     box-sizing: border-box;
  }

  *::after {
    box-sizing: border-box;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  
  img, picture, svg, video, canvas {
    display: block;
    max-width: 100%;
  }
`;

const MiraThemeProvider = ({
  children,
  theme,
}: {
  theme?: {};
  children: any;
}) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme ?? DEFAULT_THEME}>{children}</ThemeProvider>
  </>
);

export { MiraThemeProvider };
