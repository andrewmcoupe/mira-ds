import React from "react";
import { render, fireEvent, act, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import ProgressButton from "./ProgressButton";

beforeEach(() => {
  vi.useFakeTimers();
});

describe.skip("ProgressButton", () => {
  it("should animate the animated-div into the correct position on mouse down", () => {
    const { getByTestId, getByRole } = render(
      <ProgressButton progressColor={"red"} variant={"blue"} />
    );

    const animationDiv = getByTestId("animated-div");
    const button = getByRole("button");

    act(() => {
      fireEvent.mouseDown(button);
      console.log(
        window.getComputedStyle(animationDiv).getPropertyValue("transform")
      );
      vi.advanceTimersByTime(2000);
      console.log(
        window.getComputedStyle(animationDiv).getPropertyValue("transform")
      );
    });
    expect(
      window.getComputedStyle(animationDiv).getPropertyValue("transform")
    ).toBe("translateX(0%) translateZ(0)");
  });

  it("should animate back to its initial position on mouse up", () => {
    const { getByTestId, getByRole } = render(
      <ProgressButton progressColor={"red"} variant={"blue"} />
    );

    const animationDiv = getByTestId("animated-div");
    const button = getByRole("button");

    // Mouse down on the button until animation is complete
    act(() => {
      fireEvent.mouseDown(button);
      vi.advanceTimersByTime(2000);

      // assert that the animation is in its correct position
      expect(
        window.getComputedStyle(animationDiv).getPropertyValue("transform")
      ).toBe("translateX(0%) translateZ(0)");
    });

    // Mouse up on the button until animation is back to initial position
    act(() => {
      fireEvent.mouseUp(button);
      vi.advanceTimersByTime(2000);
    });

    expect(
      window.getComputedStyle(animationDiv).getPropertyValue("transform")
    ).toBe("translateX(-101%) translateZ(0)");
  });

  it("should invoke onProgressComplete when animation has completed", () => {
    const mockOnProgressComplete = vi.fn();
    const { getByRole } = render(
      <ProgressButton
        progressColor={"red"}
        variant={"blue"}
        onProgressComplete={mockOnProgressComplete}
      />
    );

    const button = getByRole("button");

    // act(() => {
    fireEvent.mouseDown(button);
    vi.advanceTimersByTime(3000);
    // });

    expect(mockOnProgressComplete).toHaveBeenCalledTimes(1);
  });
});
