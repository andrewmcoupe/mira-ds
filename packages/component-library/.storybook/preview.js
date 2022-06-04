import { MiraThemeProvider } from "@mira-ds/theme-provider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    return (
      <MiraThemeProvider>
        <Story />
      </MiraThemeProvider>
    );
  },
];
