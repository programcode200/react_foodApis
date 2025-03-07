import { render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should render the Body component with Search", async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
 

  // Use waitFor to handle async DOM updates

  const searchbtn = await screen.findByRole("button", { name: "Search" });
    expect(searchbtn).toBeInTheDocument();
});

