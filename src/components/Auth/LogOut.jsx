import { useNavigate } from "react-router-dom";

export default function LogOut () {
    const navigate = useNavigate();
    
    const handleLogout = async () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/homepage");
    return (
        <button onClick={handleLogout}>Log Out</button>
    )
    }
}


