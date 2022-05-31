import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import Counter from "../counter";
import userEvent from "@testing-library/user-event";

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

  it("should have an input that starts at 1", () => {
    render(<Counter />);
    const input: HTMLInputElement = screen.getByTestId("input");
    expect(input.value).toBe("1");
  });

  it("should update input value on user's change event", () => {
    render(<Counter />);
    const input: HTMLInputElement = screen.getByTestId("input");
    expect(input.value).toBe("1");
    fireEvent.change(input, {
      target: {
        value: "4",
      },
    });
    expect(input.value).toBe("4");
  });

  it("should increase count on clicking the plus button", () => {
    render(<Counter />);
    const incrementInput = "5";
    const plusButton = screen.getByTestId("plus");
    const counter = screen.getByTestId("counter");
    const input: HTMLInputElement = screen.getByTestId("input");
    const counterInitialValue = counter.textContent;
    fireEvent.change(input, {
      target: {
        value: incrementInput,
      },
    });
    fireEvent.click(plusButton);
    expect(counter.textContent).not.toEqual(counterInitialValue);
    expect(Number(counter.textContent)).toBe(
      Number(counterInitialValue) + Number(incrementInput)
    );
  });

  it("should decrease count on clicking the minus button", () => {
    render(<Counter />);
    const decrementInput = "5";
    const minusButton = screen.getByTestId("minus");
    const input: HTMLInputElement = screen.getByTestId("input");
    const counter = screen.getByTestId("counter");
    const counterInitialValue = counter.textContent;
    expect(minusButton).not.toBeDisabled();
    userEvent.type(input, decrementInput);
    // fireEvent.change(input, {
    //   target: {
    //     value: decrementInput,
    //   },
    // });
    fireEvent.click(minusButton);
    expect(counter.textContent).not.toEqual(counterInitialValue);
    expect(Number(counter.textContent)).toBe(
      Number(counterInitialValue) - Number(decrementInput)
    );
  });

  it("should change color of counter to green if count > 100", () => {
    render(<Counter />);
    const incrementInput = "101";
    const plusButton = screen.getByTestId("plus");
    const input: HTMLInputElement = screen.getByTestId("input");
    const counter = screen.getByTestId("counter");
    fireEvent.change(input, {
      target: {
        value: incrementInput,
      },
    });
    fireEvent.click(plusButton);
    expect(counter.style.color).toBe("green");
  });

  it("should change color of counter to red if count < -100", () => {
    render(<Counter />);
    const incrementInput = "101";
    const minusButton = screen.getByTestId("minus");
    const input: HTMLInputElement = screen.getByTestId("input");
    const counter = screen.getByTestId("counter");
    fireEvent.change(input, {
      target: {
        value: incrementInput,
      },
    });
    fireEvent.click(minusButton);
    expect(counter.style.color).toBe("red");
  });
});
