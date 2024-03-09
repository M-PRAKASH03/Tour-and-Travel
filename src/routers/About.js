import NavBar from "../components/NavBar"
import HeroHome from "../components/HeroHome";
import Aboutimg from "../images/1.jpg"
import Footer from "../components/Footer";
import AboutData from "../components/AboutData";



function About (){
    return(
        <>
        <NavBar/>
        <HeroHome 
        cName="hero-about"
        heroImg={Aboutimg}
        tittle= "About"
        />
        <AboutData/>
        <Footer/>
        </>

    )
}
export default About