import { Link } from "react-router-dom"
import PublicPost from "../components/Dreams/PublicPost"
import LogOut from "../components/Auth/LogOut"

export default function WallPage() {
    return(
        <>
        <h1>Dream Wall</h1>
        <Link to ="/newpost"> <button className="rounded-md bg-orange px-2 mb-2"> New Post </button></Link>
        <br />
        <LogOut />
        <Link to ="/posts"> <button className="rounded-md bg-orange px-2 mb-2"> My Post </button></Link>
        <PublicPost />
        </>
    )
}