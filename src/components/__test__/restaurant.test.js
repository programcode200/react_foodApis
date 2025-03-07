import { render, screen } from "@testing-library/react";
import RestaurantContainer, { withOpenLabel } from "../RestaurantContainer";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("should render Restaurant with props Data", () => {
  render(<RestaurantContainer resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});

test("should render restaurant comp with promoted open label", () => {
  const WrappedRestaurantContainer = withOpenLabel(RestaurantContainer);

  render(<WrappedRestaurantContainer resData={MOCK_DATA} />);

  const open = screen.getByText("Open");
  expect(open).toBeInTheDocument();
});
