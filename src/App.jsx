import { Routes, Route } from "react-router-dom";
import CreateUserForm from "./components/Auth/CreateUserForm";
import LoginPage from "./components/Auth/LoginForm";
import NewDreamPage from "./pages/NewDreamPage";
import HomePage from "./pages/HomePage";
import DreamPage from "./pages/DreamPage";
import WallPage from "./pages/WallPage";
import CommentsPage from "./pages/CommentsPage";
import InfoPage from "./pages/InfoPage";
import EditPage from "./pages/EditPage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/wall" element={<WallPage />} />
      <Route path="/create" element={<CreateUserForm />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/newpost" element={<NewDreamPage />} />
      <Route path="/posts" element={<DreamPage />} />
      <Route path="/posts/:id/comment" element={<CommentsPage/>} />
      <Route path="/posts/:id" element={<InfoPage/>} />
      <Route path="/posts/:id/edit" element={<EditPage />} />
      </Routes>
  )
}

export default App
