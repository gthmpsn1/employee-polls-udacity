import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Nav = (props) => {
    const authedUser = props.authedUser;
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
                    <li className="user-avatar"><Link to="/login"></Link></li>
                    <li><Link to="/login">Logout {authedUser}</Link></li>
                </div>
            </ul>
        </nav>
    )
}
const mapStateToProps = ({authedUser}) => ({
    authedUser: authedUser
})

export default connect(mapStateToProps)(Nav);