import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us page Test cases", () => {
  test("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load two input boxes component", () => {
    render(<Contact />);

    //querying
    const inputbox = screen.getAllByRole("textbox");

    //assertion
    expect(inputbox[0]).toBeInTheDocument();

    console.log(inputbox);
  });
});
