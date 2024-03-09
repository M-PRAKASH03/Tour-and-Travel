import NavBar from "../components/NavBar"
import HeroHome from "../components/HeroHome";
import Footer from "../components/Footer";
import ContectForm from "../components/ContectForm";



function Contect (){
    return(
        <>
        <NavBar/>
        <HeroHome 
        cName="hero-about"
        heroImg="https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_1280.jpg"
        tittle= "Contect"
        />
        <ContectForm/>

        <Footer/>

        </>

    )
}
export default Contect