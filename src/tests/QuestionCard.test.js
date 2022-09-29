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
 import QuestionCard from "../components/QuestionCard";
 
 describe("Render the QuestionCard component and expect no errors on Mount and Render in console", () => {
  let mockStore = "";
  let view = ""; 
  const spy = jest.spyOn(global.console, "error");

  const testQuestionObject = {
    "8xf0y6ziyjabvozdd253nd": {
      id: "8xf0y6ziyjabvozdd253nd",
      author: "sarahedo",
      timestamp: 1660123364121,
      optionOne: {
        votes: ["sarahedo"],
        text: "Build our new application with Javascript",
      },
      optionTwo: {
        votes: [],
        text: "Build our new application with Typescript",
      },
    },
  };

  const testAuthor = "Dr. Test Author"
  const testAuthedUser = "tylermcginnis"

  beforeEach(() => {
    mockStore = createStore(reducer, middleware);
  });
 
  it("will match the snapshot", async () => {
    view = render(
      <MemoryRouter>
        <Provider store={ mockStore }>
          <QuestionCard question={testQuestionObject} author={testAuthor} authedUser={testAuthedUser}/>
        </Provider>
      </MemoryRouter>
    );

    expect(view).toMatchSnapshot();
  });

  it("when a valid poll is passed in, there should be no errors", () => {
    view = render(
      <MemoryRouter>
        <Provider store={ mockStore }>
          <QuestionCard question={testQuestionObject} author={testAuthor} authedUser={testAuthedUser}/>
        </Provider>
      </MemoryRouter>
    );

    expect(spy).not.toHaveBeenCalled();
  });

  it("when a valid poll is passed the 'show poll' button is shown", () => {
    view = render(
      <MemoryRouter>
        <Provider store={ mockStore }>``
          <QuestionCard question={testQuestionObject} author={testAuthor} authedUser={testAuthedUser}/>
        </Provider>
      </MemoryRouter>
    );
    const testShowPollBtn = screen.queryByTestId("TEST-SHOW-POLL");
    expect(testShowPollBtn).toBeInTheDocument();
    expect(spy).not.toHaveBeenCalled();
  });

 });