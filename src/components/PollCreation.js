import { useState } from "react";
import { connect } from "react-redux";
import {useNavigate} from "react-router-dom";
import { handleCreatePoll } from "../actions/questions";

import Nav from "./Nav";

const PollCreation = (props) => {
    const navigate = useNavigate();
    const [textArea1, setTextArea1] = useState("");
    const [textArea2, setTextArea2] = useState("");
    const {user, dispatch} = props;

    const updateTextArea1 = (textArea1) => {
        setTextArea1(textArea1);
    };
    const updateTextArea2 = (textArea2) => {
        setTextArea2(textArea2);
    };

    const handleNewPoll = (e) => {
        e.preventDefault();
        const info = {
            textArea1,
            textArea2,
            user
        };
        dispatch(handleCreatePoll(info));
        setTextArea1("");
        setTextArea2("");
        navigate("/");
    } 

    return (
        <div className="poll-creation-container">
            <Nav />
            <div className="poll-creation-info">
                <h4>Create Your Own Poll</h4>
                <h3>Would you rather...</h3>
                <div className="option-create-container">
                    <form>
                        <label>Option #1</label>
                        <textarea 
                            maxLength="250" 
                            onChange={(e) => updateTextArea1(e.target.value)} 
                            value={textArea1} 
                            placeholder="Enter option #1" >
                        </textarea>
                        <p>{textArea1.length}/250</p>
                        <label>Option #2</label>
                        <textarea 
                            maxLength="250" 
                            onChange={(e) => updateTextArea2(e.target.value)} 
                            value={textArea2} 
                            placeholder="Enter option #2" >
                        </textarea>
                        <p>{textArea2.length}/250</p>
                        <input type="submit" onClick={handleNewPoll} value="Creat Poll" disabled={textArea1 === "" || textArea2 === ""} />
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({authedUser, dispatch}) => ({
    dispatch: dispatch,
    user: authedUser
})

export default connect(mapStateToProps)(PollCreation);