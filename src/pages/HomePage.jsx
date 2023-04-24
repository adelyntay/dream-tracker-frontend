import { Link } from "react-router-dom"


export default function HomePage () {
    return(
        <>
        <h1>Homepage</h1>
        <Link to ="/login" className="font-bold"> Login </Link>
        <br />
        <Link to ="/create"> Sign Up </Link>
        </>
    )
}