import CreateUserForm from "../components/Auth/CreateUserForm"
import AuthBar from "../components/Navbar/AuthBar"

export default function SignUpPage () {
    return (
        <>
        <AuthBar />
        <div className="flex justify-center">
        <div className="grid card bg-base-300 rounded-box place-items-center">
        <img src="https://media.giphy.com/media/iY9nqZReccnh3oE8dx/giphy.gif" width="350" height="260"/>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid card bg-base-300 rounded-box place-items-center">
        <CreateUserForm />
        </div>
        </div>
        
        </>
    )
}