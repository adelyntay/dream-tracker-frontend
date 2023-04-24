import { Link } from "react-router-dom"
import DreamLog from "../components/Dreams/DreamLog"
import LogOut from "../components/Auth/LogOut"

export default function DreamPage() {
    return(
        <>
        <h1>All Dreams</h1>
        <Link to ="/newpost"> New Post </Link>
        <LogOut />
        <DreamLog />
        </>
    )
}
