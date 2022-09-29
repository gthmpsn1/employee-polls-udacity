/**
* @jest-environment jsdom
*/

import { render, screen, fireEvent } from "@testing-library/react";
import middleware from "../middleware";
import reducer from "../reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Login from "../components/Login";

describe("Render the Login component and expect no errors on Mount and Render in console", () => {
    let mockStore = "";
    let view = ""; 
    const testUsername = "sarahedo";
    const testPassword = "any123";
    const spy = jest.spyOn(global.console, "error");

    beforeEach(() => {
        mockStore = createStore(reducer, middleware);
        view = render(
            <MemoryRouter>
            <Provider store={ mockStore }>
                <Login />
            </Provider>
            </MemoryRouter>
        );
    });

    it("will match the snapshot", async () => {
        expect(view).toMatchSnapshot();
    });

    it("will match the snapshot", async () => {
        const passwordInput = screen.queryByTestId("TEST-PASSWORD");
        const usernameInput = screen.queryByTestId("TEST-USER")
        const loginButton = screen.queryByTestId('TEST-LOGIN');
        fireEvent.change(passwordInput, {target: {value: testUsername}});
        fireEvent.change(usernameInput, {target: {value: testPassword}});
        expect(loginButton).not.toBeDisabled();
    });
});