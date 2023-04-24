import { Link } from "react-router-dom"
import DreamLog from "../components/Dreams/DreamLog"
import LogOut from "../components/Auth/LogOut"

export default function DreamPage() {
    return(
        <>
        <h1>All Dreams</h1>
        <div><Link to ="/newpost"><button className="rounded-md bg-orange px-2"> New Post </button></Link></div>
        <div><LogOut /></div>
        <DreamLog />
        </>
    )
}
