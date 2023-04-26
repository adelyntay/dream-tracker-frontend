import LogOut from "../Auth/LogOut";
import { Link } from "react-router-dom"

export default function NavBar () {
    return(

<div className="navbar bg-base-100">
<div className="flex-1">

<p className="btn btn-ghost text-orange text-xl">Dream Journal</p>
</div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li className="hover:bg-pink rounded-md"><Link to ="/newpost">New Post</Link></li>
      <li className="hover:bg-pink rounded-md"><Link to ="/wall">Wall</Link></li>
      <li className="hover:bg-pink rounded-md"><Link to ="/posts">My Post</Link></li>
      <li className="hover:bg-pink rounded-md"><LogOut /></li>
    </ul>
  </div>
</div>

    )   
}