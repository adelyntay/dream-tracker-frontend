import { useNavigate } from "react-router-dom";

export default function LogOut () {
    const navigate = useNavigate();
    
    const handleLogout = async () => {
    localStorage.removeItem("token");
    navigate("/");
    };
    return (
        <button onClick={handleLogout} className="rounded-md px-4 bg-pink">Log Out</button>
    )
    }



