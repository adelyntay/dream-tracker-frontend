import { Link } from "react-router-dom"
import PublicPost from "../components/Dreams/PublicPost"

export default function WallPage() {
    return(
        <>
        <h1>Dream Wall</h1>
        <Link to ="/newpost"> New Post </Link>
        <PublicPost />
        </>
    )
}