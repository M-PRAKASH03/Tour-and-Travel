import NavBar from "../components/NavBar"
import HeroHome from "../components/HeroHome";
import Footer from "../components/Footer";
import Trip from "../components/Trip";




function Services (){
    return(
        <>
        <NavBar/>
        <HeroHome 
        cName="hero-about"
        heroImg="https://cdn.pixabay.com/photo/2019/06/01/22/41/river-4245261_1280.jpg"
        tittle= "Services"
        />
        <Trip/>
        <Footer/>
        </>

    )
}
export default Services