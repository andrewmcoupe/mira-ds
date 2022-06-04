import React from "react";
import { render } from "@testing-library/react";
import { MiraThemeProvider } from "@mira-ds/theme-provider";
import { Badge } from "./Badge";

const renderWithTheme = (element: React.ReactNode) => {
  return render(<MiraThemeProvider>{element}</MiraThemeProvider>);
};

describe("Badge", () => {
  it("should render the correct text", () => {
    const { getByText } = renderWithTheme(<Badge>Hello World</Badge>);
    expect(getByText("Hello World")).toBeInTheDocument();
  });
});
