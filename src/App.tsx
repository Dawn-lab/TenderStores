import { Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp"
import Home from "./Pages/Home";
import Login from "./Pages/LogIn";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
