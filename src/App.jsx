import './style/App.css'
import {Route, Routes} from "react-router-dom";
import DashBoard from "./view/DashBoard.jsx";

function App() {

  return (
    <Routes>
      <Route path="/" element={<DashBoard/>}/>
    </Routes>
  )
}

export default App
