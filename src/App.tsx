import NavBar from "./components/NavBar"
import { FaWhatsapp,FaPhoneAlt} from "react-icons/fa"

function App() {

  return (
    <>
      <div className="bg-green-900 p-2 flex justify-around text-gray-200">
        <div className="flex justify-between"><span className="pt-1.5 pr-1.5"><FaPhoneAlt/></span> or  <span className="pt-1.5 pr-1.5 pl-1.5"><FaWhatsapp/></span>+245 729 051 646</div>
        <div>Get 50 % Discount on selected items | Shop Now</div>
        <div className="flex justify-between">
          <select name="language" id="" className="bg-inherit mr-3">
            <option>Eng</option>
            <option>Swahili</option>
          </select>
          <select name="Location" id="" className="bg-inherit">
            <option>Kenya</option>
            <option>Tanzania</option>
          </select>
        </div>
      </div>
      <NavBar />
      <h1>my name</h1>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
