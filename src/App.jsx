import { Routes, Route } from "react-router-dom";
import CreateUserForm from "./components/CreateUserForm";
import LoginForm from "./components/LoginForm";

function App() {

  return (
    <Routes>
  
      {/*<Route exact path="/">
     
      </Route>
      <Route path="/about">
    
  </Route> */}
      <Route path="/" element={<CreateUserForm />} />
      <Route path="/login" element={<LoginForm />} />
  
      </Routes>
  )
}

export default App
