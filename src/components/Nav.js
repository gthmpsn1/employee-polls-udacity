import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {logout} from "../actions/authedUser";

const Nav = (props) => {
    const dispatch = props.dispatch;
    const user = props.user;

    const logoutUser = (e) => {
        let doLogout = null
        e.preventDefault();
        dispatch(logout(doLogout));
    } 

    return (
        <nav className="nav">
        <h1>Employee Polls <span>by Gabriel Thompson</span></h1>
            <ul>
                <div>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/leaderboard">Leaderboard</Link></li>
                    <li><Link to="/new-poll">New Poll</Link></li>
                </div>
                <div>
                    <li className="user-avatar" style={{backgroundImage: `url(${user.avatarURL})`}} ><Link to="/login" ></Link></li>
                    <li><Link to="/login" onClick={logoutUser}>Logout, {user.name}</Link></li>
                </div>
            </ul>
        </nav>
    )
}
const mapStateToProps = ({authedUser, dispatch, users}) => ({
    dispatch: dispatch,
    user: users[authedUser]
})

export default connect(mapStateToProps)(Nav);