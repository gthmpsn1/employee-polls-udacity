import { getInitialData } from "../utils/api";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(({users, questions, id}) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                //uncomment the line 13 and comment out line 15 to require an authed user to login
                dispatch(setAuthedUser(null));
                //uncomment the line 15 and comment out line 13 for testing and stay signed in as any user
                //dispatch(setAuthedUser("sarahedo"));
            })
    }
}