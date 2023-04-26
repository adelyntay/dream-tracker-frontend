import LoginForm from "../components/Auth/LoginForm";
import AuthBar from "../components/Navbar/AuthBar";

export default function LoginPage() {
    return(
        <>
        <AuthBar />
        <div className="flex justify-center">
        <div className="grid card bg-base-300 rounded-box place-items-center">
        <img src="https://media.giphy.com/media/k3WaWW2V9BcAxr4Gk3/giphy.gif" width="300" height="210"/>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid card bg-base-300 rounded-box place-items-center">
        <LoginForm /> 
        </div>
        </div>
        </>
    )
}
