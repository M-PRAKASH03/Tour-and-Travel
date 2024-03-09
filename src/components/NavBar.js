import "./NavStyles.css"
import { MenuItems } from "./MenuItems"
import {Link} from "react-router-dom"
import { useState } from "react"

function NavBar(){
   const[state,setState] = useState({clicked: false})
   function handleBar(){
    setState({clicked : !state.clicked})
   }
    return(
        <nav className="Navcontinar">
            <h1 className="nav-logo" >Tharas</h1>
            {/* <i class="fa-solid fa-heart-pulse"></i> */}

            <div className="menu-icons" onClick={handleBar}>
                <i className={state.clicked ? "fas fa-times" :"fas fa-bars"}></i>
            </div>

            <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map(
                    (val,i)=>{
                        return(
                            <li key={i}>
                                <Link className={val.cName} to={val.url}>
                                <i className={val.icon}></i>{val.tittle}
                                </Link>
                            </li>
                            ) })}
                           <Link to= "/signup">
                              <button className="sig-btn">Sign up</button>
                            </Link> 
            </ul>
        </nav>
    )

}
export default NavBar