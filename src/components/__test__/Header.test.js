import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"



test("should load header component with a login", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginbutton = screen.getByRole("button",{name: "Login"})
  // const loginbtn = screen.getByText("Login")
  // const cart = screen.getByText("🛒 - 0")

  fireEvent.click(loginbutton)
  const logoutbtn = screen.getByRole("button",{name: "Logout"})

  expect(logoutbtn).toBeInTheDocument();
});
