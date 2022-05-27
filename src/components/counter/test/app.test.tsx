import React from "react";
import { render, screen } from "@testing-library/react";
import Counter from "../counter";

describe("Counter", () => {
  it("should have the correct heading", () => {
    render(<Counter />);
    const headerText = screen.getByText(/my counter/i);
    expect(headerText).toBeInTheDocument();
  });
});
