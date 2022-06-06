import "@fontsource/inter";
import { MiraThemeProvider } from "@mira-ds/theme-provider";
import { Button } from "@mira-ds/components";

function MyApp({ Component, pageProps }) {
  return (
    <MiraThemeProvider>
      <Button variant="success">sdfsdf</Button>
      <Component {...pageProps} />
    </MiraThemeProvider>
  );
}

export default MyApp;
