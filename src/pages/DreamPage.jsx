import DreamLog from "../components/Dreams/DreamLog"
import NavBar from "../components/Navbar/Navbar"
import Data from "../components/Chart/Data"

export default function DreamPage() {
    return(
        <>
        <NavBar />
        <div className="flex w-full">
        <div className="grid h-20 flex-grow card rounded-box place-items-center mt-10">
        <DreamLog/>
        </div>
       
        <div className="grid h-20 flex-grow card rounded-box place-items-center">
        <img src="https://media.giphy.com/media/6WCKUSih3kUbwEklZp/giphy.gif" width="350" height="260"/>
        
        <div className="pl-15 pt-2"><Data /></div>
        </div>
        </div>
        </>
    )
}
