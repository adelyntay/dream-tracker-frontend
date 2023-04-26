import { Link } from "react-router-dom"

export default function AuthBar () {
    return(

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      
    </div>
    <a className="btn btn-ghost text-orange text-xl">Dream Journal</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li className="btn border-0"><Link to ="/">Home</Link></li>
      <li className="btn border-0">About Us</li>
      <li className="btn border-0">Contact Us</li>
    </ul>
  </div>
  <div className="navbar-end">
  
  </div>
</div>
    )
}