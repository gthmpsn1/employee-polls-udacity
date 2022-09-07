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
        Object.keys(users).forEach((user) => {
            if (user === userNameInput && users[user].password === passwordInput) {
                e.preventDefault();
                dispatch(setAuthedUser(user.id));
                setPasswordInput("");
                setUserNameInput("");
                navigate("/");
            } else {
                alert("Enter valid login information");
            }
        })                
    }


    return (
        <div className="login-container">
            <h1>Employee Polls</h1>
            <div className="login-image"></div>
            <h4>Log In</h4>
            <form className="login-form">
                <label>User</label>
                <input tpye="text" placeholder="User" value={userNameInput} onChange={setUNameQuery} />
                <label>Password</label>
                <input type="password" placeholder="Password" value={passwordInput} onChange={setPasswordQuery} />
                <input className="submit-btn" type="submit" onClick={attemptSignIn} disabled={userNameInput === "" || passwordInput === ""} />
            </form>
        </div>
    )
}
const mapStateToProps = ({users, dispatch}) => ({
    dispatch: dispatch,
    users: users
})

export default connect(mapStateToProps)(Login);