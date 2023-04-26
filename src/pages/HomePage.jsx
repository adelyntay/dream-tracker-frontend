import { Link } from "react-router-dom"
import HomeNav from "../components/Navbar/HomeNav"


export default function HomePage () {
    return(
      <>
        <div>
        <HomeNav/>
        
        <div className="hero bg-base-200 mt-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://media.giphy.com/media/3og0IIAyPXMg2LG12w/giphy.gif" width="480" height="360"/>
        <div>
        <h1 className="text-5xl font-bold m-5">Dreams offer another way of looking at things.</h1>
        <p className="py-2 m-5 text-neutral-400">Understand your dreams and remember them more clearly.

        You may find that you dream about similar topics or themes repeatedly. By keeping track of your dreams, you can begin to see patterns and notice what may trigger certain dreams.</p>
        <Link to ="/create" className="btn bg-orange text-black m-5 hover:text-white"> Sign Up </Link>
        </div>
        </div>
        </div>
        </div>
      </>
    )
}