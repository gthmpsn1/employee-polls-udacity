import { RECEIVE_QUESTIONS, SUBMIT_VOTE } from "../actions/questions"; 

export default function questions (state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SUBMIT_VOTE:
            let vote = action.vote;
            if (vote === 1) {
                return {
                    ...state,
                    [action.id]: {
                        ...state[action.id].optionOne,
                        votes: state[action.id].optionOne.votes.concat(action.authedUser)
                    }
                }
            } else {
                return {
                    ...state,
                    [action.id]: {
                        ...state[action.id].optionTwo,
                        votes: state[action.id].optionTwo.votes.concat(action.authedUser)
                    }
                }
            }
            
        default:
            return state;
    }
}