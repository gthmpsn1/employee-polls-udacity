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

describe("Render Login", () => {
    let mockStore = "";
    let view = "";    

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

    it("will render login component", () => {
        expect(view).toMatchSnapshot();
    });
});