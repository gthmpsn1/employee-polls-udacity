import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Nav from "./Nav";

const Leaderboard = (props) => {
    const users = props.users;
    const usersArray = Object.values(props.users);
    let sortedScores = [];
    const [sortedScoresState, setSortedScoresState] = useState([]);
    console.log(users, sortedScoresState);

    const sortScores = () => {
        let total = "";
        let userStats = "";

        usersArray.forEach((u) => {
            total = Object.keys(u.answers).length + u.questions.length;
            userStats = {
                user: u.id,
                answers: Object.keys(u.answers).length,
                questions: u.questions.length,
                total: total
            };
            sortedScores.push(userStats);
        })
        sortedScores.sort((a,b) => b.total - a.total);
        setSortedScoresState(sortedScores);
    }
    
    useEffect(() => {
        sortScores();
    }, [])
    

    return (
        <div className="leaderboard-container">
            <Nav />
            <div className="leaderboard">
                <h2>Leaderboard</h2>
                <div className="header">
                    <h6>Users</h6>
                    <h6>Answered</h6>
                    <h6>Created</h6>
                </div>
                {sortedScoresState.map((u) => (
                    <div key={u.user} className="user-stats">
                        <div>
                            <div className="avatar" style={{backgroundImage: `url(${users[u.user].avatarURL})`}}></div>
                            <span>
                                <div className="name">{users[u.user].name}</div>
                                <div className="username">{u.user}</div>
                            </span>
                        </div>
                        <p>{u.answers}</p>
                        <p>{u.questions}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = ({users}) => ({
    users: users
})

export default connect(mapStateToProps)(Leaderboard);