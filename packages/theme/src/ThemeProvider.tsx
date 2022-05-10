import { ThemeProvider, createGlobalStyle } from "styled-components";
import { WithChildren } from "@mira-ds/components/src/utils/types";
import { theme } from "./theme";

const DEFAULT_THEME = theme;

const GlobalStyle = createGlobalStyle`
  * { 
    margin: 0; 
    font-family: "$poppins" ,sans-serif 
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
}: WithChildren<{ theme: {} }>) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme ?? DEFAULT_THEME}>{children}</ThemeProvider>
  </>
);

export { MiraThemeProvider };
