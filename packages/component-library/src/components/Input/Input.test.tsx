import React from "react";
import { vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("Input", () => {
  it("should call the onChange prop when typing", () => {
    const mockOnChangeHandler = vi.fn();
    const { getByRole } = render(<Input onChange={mockOnChangeHandler} />);

    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "Hello Mira" } });

    expect(mockOnChangeHandler).toHaveBeenCalled();
  });

  it("should attach a ref to the underlying input element if provided", () => {
    const expectedRefValue = "Hello Mira";
    const myRef = React.createRef<HTMLInputElement>();

    const { getByRole } = render(<Input ref={myRef} />);

    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: expectedRefValue } });

    expect(myRef.current?.value).toEqual(expectedRefValue);
  });

  it("should render an icon if provided on the props object", () => {
    const { getByRole, debug } = render(<Input icon={"EnterIcon"} />);

    const input = getByRole("textbox");
    const icon = input.previousSibling as SVGElement;

    expect(icon).toBeInTheDocument();
  });
});
