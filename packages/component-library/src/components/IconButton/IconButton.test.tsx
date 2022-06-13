import React from "react";
import { render, waitFor } from "@testing-library/react";
import { IconButton } from "./IconButton";

describe("IconButton", () => {
  it("should render an icon", () => {
    const { getByRole } = render(<IconButton icon={"DiscIcon"} />);
    const button = getByRole("button");
    const icon = button.querySelector("svg");

    expect(icon).toBeInTheDocument();
  });

  it("should render an icon and text if provided", () => {
    const { getByRole } = render(
      <IconButton icon={"DiscIcon"}>Learn more</IconButton>
    );
    const button = getByRole("button");
    const icon = button.querySelector("svg");

    expect(icon).toBeInTheDocument();
    expect(button).toHaveTextContent("Learn more");
  });
});
