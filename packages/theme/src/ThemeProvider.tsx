import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const DEFAULT_THEME = theme;

const GlobalStyle = createGlobalStyle`
  * { 
    margin: 0; 
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

export const MiraThemeProvider = ({
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
