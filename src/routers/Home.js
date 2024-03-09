import Destination from "../components/Destination";
import Footer from "../components/Footer";
import HeroHome from "../components/HeroHome";
import NavBar from "../components/NavBar"
import Trip from "../components/Trip";

// import {Link} from "react-router-dom"
function Home (){
    return(
        <>
        <NavBar/>
        <HeroHome 
        cName="hero-continar"
        heroImg="https://images.unsplash.com/photo-1519055548599-6d4d129508c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        tittle= "Your Journey Your Story"
        text = "Choose Your Favourite Destination."
        url ="/"
        buttonText = "Travel Plan"
        btnClass="show" 
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    )
}
export default Home 