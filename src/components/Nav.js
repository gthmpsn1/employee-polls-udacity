import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {logout} from "../actions/authedUser";

const Nav = (props) => {
    const {user, dispatch, authedUser} = props;
    const logoutUser = (e) => {
        let doLogout = null
        e.preventDefault();
        dispatch(logout(doLogout));
    } 

    return (
        <nav className="nav">
            <ul>
                <div>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/leaderboard">Leaderboard</Link></li>
                    <li><Link to="/add">New Poll</Link></li>
                </div>
                {authedUser === null 
                    ? <div><li><Link to="/">Please Login</Link></li></div> 
                    : <div>
                        <li className="user-avatar" style={{backgroundImage: `url(${user?.avatarURL})`}} ></li>
                        <li><Link to="/" data-testid={'TEST'} onClick={logoutUser}>Logout, {user?.name}</Link></li>
                    </div>
                }
            </ul>
        </nav>
    )
}
const mapStateToProps = ({authedUser, dispatch, users}) => ({
    dispatch: dispatch,
    user: users[authedUser],
    authedUser: authedUser
})

export default connect(mapStateToProps)(Nav);