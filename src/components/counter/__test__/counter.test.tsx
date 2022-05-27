import {render, cleanup, screen, fireEvent} from "@testing-library/react";
import Counter from "../counter";

describe("Counter", () => {
  afterAll(cleanup);

  it("should have the correct heading", () => {
    render(<Counter />);
    const counterHeader = screen.getByTestId("header-text");
    expect(counterHeader.textContent).toBe("My Counter");
  });

  it("should initially start at zero", () => {
    render(<Counter />);
    const counterCount = screen.getByTestId("counter");
    expect(counterCount.textContent).toBe("0");
  });

  it("should have an input that starts at 1" , () => {
    render(<Counter />)
    const input: HTMLInputElement = screen.getByTestId("input")
    expect(input.value).toBe("1");
  })
});
