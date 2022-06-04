import { ThemeProvider, createGlobalStyle } from "styled-components";
import "@fontsource/inter";
import { theme } from "./theme";

const DEFAULT_THEME = theme;

const GlobalStyle = createGlobalStyle`
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
