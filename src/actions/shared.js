import { getInitialData } from "../utils/api";
import { setAuthedUser } from "./authedUser";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";

const AUTHED_ID = "tylermcginnis";

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(({users, questions, id}) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(setAuthedUser(AUTHED_ID));
            })
    }
}