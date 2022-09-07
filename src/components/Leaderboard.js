import Nav from "./Nav";
const Leaderboard = () => {
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

                <div className="user-stats">
                    <div>
                        <div className="avatar"></div>
                        <span>
                            <div className="name">fName lName</div>
                            <div className="username">username</div>
                        </span>
                    </div>
                    <p>4</p>
                    <p>2</p>
                </div>

                <div className="user-stats">
                    <div>
                        <div className="avatar"></div>
                        <span>
                            <div className="name">fName lName</div>
                            <div className="username">username</div>
                        </span>
                    </div>
                    <p>4</p>
                    <p>2</p>
                </div>

                <div className="user-stats">
                    <div>
                        <div className="avatar"></div>
                        <span>
                            <div className="name">fName lName</div>
                            <div className="username">username</div>
                        </span>
                    </div>
                    <p>4</p>
                    <p>2</p>
                </div>
            </div>
        </div>
    )
}

export default Leaderboard;