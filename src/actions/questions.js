import { saveVote } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SUBMIT_VOTE = "SUBMIT_VOTE";

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function vote ({id, authedUser, vote}) {
    return {
        type: SUBMIT_VOTE,
        id,
        authedUser,
        vote
    }
};

export function handleVote(info) {
    return (dispatch) => {
        dispatch(vote(info));

        return saveVote(info)
            .catch((e) => {
                console.warn("Error: ", e);
                dispatch(vote(info));
                alert("Error with voting.");
            })
    }
}