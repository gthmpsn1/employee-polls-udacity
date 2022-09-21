/**
 * @jest-environment jsdom
 */
import React from "react";
import QuestionCard from "../components/QuestionCard";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

describe("Render the QuestionCard component and expect no errors on Mount and Render in console", () => {
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

  const spy = jest.spyOn(global.console, "error");

  it("status is 'open' & hasVoted is true", () => {
    render(
        <Router>
          <QuestionCard
            question={testQuestionObject}
            status={"open"}
            author={testQuestionObject.author}
            hasVoted={true}
          />
        </Router>
      );
    expect(spy).not.toHaveBeenCalled();
  });
  
  it("status is 'open' & hasVoted is false", () => {
    render(
        <Router>
          <QuestionCard
            question={testQuestionObject}
            status={"open"}
            author={testQuestionObject.author}
            hasVoted={false}
          />
        </Router>
      );
    expect(spy).not.toHaveBeenCalled();
    const button = screen.queryByTestId('TEST');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    const userUrl = window.location.pathname;
    expect(userUrl).toEqual(`/poll/${"open"}/${testQuestionObject.id}`)
  });

  it("status is 'closed' & hasVoted is true", () => {
    render(
        <Router>
          <QuestionCard
            question={testQuestionObject}
            status={"closed"}
            author={testQuestionObject.author}
            hasVoted={true}
          />
        </Router>
      );
    expect(spy).not.toHaveBeenCalled();
  });

  it("status is 'closed' & hasVoted is false", () => {
    render(
        <Router>
          <QuestionCard
            question={testQuestionObject}
            status={"closed"}
            author={testQuestionObject.author}
            hasVoted={false}
          />
        </Router>
      );
    expect(spy).not.toHaveBeenCalled();
  });
});