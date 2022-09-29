import { Link } from "react-router-dom"
import Nav from "./Nav";

const NotFound = () => {
    return (
        <div>
        <Nav />
            <p>That page does not exist.</p>
            <div>Please <Link to={"/"} >login</Link>.</div>
        </div>
    )
}

export default NotFound;