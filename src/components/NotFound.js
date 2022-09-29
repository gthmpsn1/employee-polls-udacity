import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <p>That page does not exist.</p>
            <div>Please <Link to={"/"} >login</Link>.</div>
        </div>
    )
}

export default NotFound;