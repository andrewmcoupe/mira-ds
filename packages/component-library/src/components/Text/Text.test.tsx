import React from "react";
import { render } from "@testing-library/react";
import { Text } from "./Text";

describe("Text", () => {
  it("should render the correct text", () => {
    const { getByText } = render(<Text>Hello Mira</Text>);

    expect(getByText("Hello Mira")).toBeInTheDocument();
  });

  it("should render the emphasised text when using the emphasis prop", () => {
    const { getByText } = render(<Text emphasised={true}>Hello Mira</Text>);

    expect(getByText("Hello Mira").tagName).toBe("EM");
  });
});
