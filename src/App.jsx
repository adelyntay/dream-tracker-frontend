import { Routes, Route } from "react-router-dom";
import CreateUserForm from "./components/CreateUserForm";

function App() {

  return (
    <Routes>
  
      {/*<Route exact path="/">
     
      </Route>
      <Route path="/about">
    
  </Route> */}
      <Route path="/" element={<CreateUserForm />} />
      
  
      </Routes>
  )
}

export default App
