import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NewDreamPage from "./pages/NewDreamPage";
import HomePage from "./pages/HomePage";
import DreamPage from "./pages/DreamPage";
import WallPage from "./pages/WallPage";
import CommentsPage from "./pages/CommentsPage";
import InfoPage from "./pages/InfoPage";
import EditPage from "./pages/EditPage";
import SignUpPage from "./pages/SignUpPage";
import StatsPage from "./pages/StatsPage";
function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/wall" element={<WallPage />} />
      <Route path="/create" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/newpost" element={<NewDreamPage />} />
      <Route path="/posts" element={<DreamPage />} />
      <Route path="/posts/:id/comment" element={<CommentsPage/>} />
      <Route path="/posts/:id" element={<InfoPage/>} />
      <Route path="/posts/:id/edit" element={<EditPage />} />
      <Route path="/chart" element={<StatsPage />} />
    </Routes>
  )
}

export default App
