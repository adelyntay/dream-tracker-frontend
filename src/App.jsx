import { Routes, Route } from "react-router-dom";
import CreateUserForm from "./components/Auth/CreateUserForm";
import LoginPage from "./components/Auth/LoginForm";
import NewDreamPage from "./pages/NewDreamPage";
import HomePage from "./pages/HomePage";
import DreamPage from "./pages/DreamPage"
import WallPage from "./pages/WallPage";
import CommentsPage from "./pages/CommentsPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/wall" element={<WallPage />} />
      <Route path="/create" element={<CreateUserForm />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/newpost" element={<NewDreamPage />} />
      <Route path="/list" element={<DreamPage />} />
      <Route path="/posts/:id" element={<CommentsPage/>} />
      </Routes>
  )
}

export default App
