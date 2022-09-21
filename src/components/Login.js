import { useState } from "react";
import { connect } from "react-redux";
import {useNavigate} from "react-router-dom";
import {setAuthedUser} from "../actions/authedUser";

const Login = (props) => {
    const navigate = useNavigate();
    const [userNameInput, setUserNameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const {users, dispatch} = props;

    const setUNameQuery = (e) => {
        e.preventDefault();
        setUserNameInput(e.target.value);
    }

    const setPasswordQuery = (e) => {
        e.preventDefault();
        setPasswordInput(e.target.value);
    }

    const attemptSignIn = (e) => {
        e.preventDefault();
        if (userNameInput in users) {
            dispatch(setAuthedUser(userNameInput));
            setPasswordInput("");
            setUserNameInput("");
            navigate("/");
        } else {
            alert("Enter valid login information");
        }                
    }


    return (
        <div className="login-container">
            <h1>Employee Polls</h1>
            <div className="login-image"></div>
            <h4>Log In</h4>
            <form className="login-form">
                <label>User</label>
                <input data-testid={'test-authed-user'} type="text" placeholder="User" value={userNameInput} onChange={setUNameQuery} />
                <label>Password</label>
                <input data-testid={'test-password'} type="password" placeholder="Password" value={passwordInput} onChange={setPasswordQuery} />
                <input data-testid={'test-login-button'} className="submit-btn" type="submit" onClick={attemptSignIn} disabled={userNameInput === "" || passwordInput === ""} />
            </form>
        </div>
    )
}
const mapStateToProps = ({users, dispatch}) => ({
    dispatch: dispatch,
    users: users
})

export default connect(mapStateToProps)(Login);