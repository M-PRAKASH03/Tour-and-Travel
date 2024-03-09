import {Route,Routes} from "react-router-dom"
import "./Style.css"
import Home from "./routers/Home"
import About from "./routers/About"
import Services from "./routers/Services"
import Contect from "./routers/Contect"
import LoginSignup from "./components/Login-signup"



function App (){
    return(
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/service" element={<Services/>}/>
                <Route path="/contact" element={<Contect/>}/>
                <Route path="/signup" element={<LoginSignup/>}/>
            </Routes>
        

        </div>
    )
}

export default App