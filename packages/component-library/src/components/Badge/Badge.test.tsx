import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Badge from "./Badge";

describe("Badge", () => {
  it("should render the correct text", () => {
    const { getByText } = render(<Badge>Hello World</Badge>);
    expect(getByText("Hello World")).toBeInTheDocument();
  });
});
