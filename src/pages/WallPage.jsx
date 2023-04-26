import PublicPost from "../components/Dreams/PublicPost"
import NavBar from "../components/Navbar/Navbar"

export default function WallPage() {
    return(
        <>
        <NavBar />
        <div className="grid grid-cols-2">
        <img src="https://media.giphy.com/media/0zOHG2RVocxnAj2SDz/giphy.gif" width="350" height="260" className="mt-10 gird col-start-1 pl-10 ml-10"/>
        <div className="mt-10">
        <PublicPost />
        </div>
       </div>
        </>
    )
}