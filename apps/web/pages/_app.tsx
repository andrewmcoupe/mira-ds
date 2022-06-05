import "@fontsource/inter";
import { MiraThemeProvider } from "@mira-ds/theme-provider";

function MyApp({ Component, pageProps }) {
  return (
    <MiraThemeProvider>
      <Component {...pageProps} />
    </MiraThemeProvider>
  );
}

export default MyApp;
