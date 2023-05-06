import { Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp"
import Home from "./Pages/Home";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
