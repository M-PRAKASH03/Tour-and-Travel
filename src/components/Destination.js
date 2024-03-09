import "../components/DestinationStyle.css"
import DestinationData from "./DestinationData"
 
function Destination (){
    return(
        <>
        <div className="destination">
            <h1>Popular Destination</h1>
            <p> Tours give you the opportunity to see a lot, within a time frame</p>

        <DestinationData
        className="first-des"
        heading="Andretti,Lakshadweep"
        text="The island is also inhabited, but has been able to maintain its beauty and charm. It also provides enough opportunities to its visitors to mingle with the nature. Spending the evenings at the seaside could be very relaxing and if you are lucky enough, you might be able to spot various aquatic animals including octopuses. Andretti Island is also famous for some Buddhist archaeological remains and the tomb of Saint Hazrat Ubaidullah. However, foreign tourists are not allowed to visit this island."
        img1="https://hblimg.mmtcdn.com/content/hubble/img/lakshdweep/mmt/activities/m_Andretti_lakshdweep_l_480_640.jpg"
        img2="https://www.holidify.com/images/compressed/4660.jpg"
       />
        <DestinationData
        className="first-des-reverse"
        heading="Mt,Danguldol, Batangas"
        text="Mt. Daguldol is a coastal mountain located in the province of Batangas. It offers a scenic view of nearby Batangas mountains and beaches. Additionally, Mt. Daguldol has an elevation of 672 MASL or 2204 feet. Mt. Daguldol is exactly situated in Sitio Biga, Barangay, Hugom San Juan, Batangas. It is bound between the municipality of San Juan and Lobo."
        img1="https://3.bp.blogspot.com/-asaI8X-pjHw/Wmop-QdJ9HI/AAAAAAAAGI4/FlHdfYUEGk0JamaZaZnkUsuftfpqzDnzACLcBGAs/w640-h427/laki-beach-bataan.JPG"
        img2="https://1.bp.blogspot.com/-RoAYxDduvdA/XViCGlbdRVI/AAAAAAAAMjk/JUMb8ihObHQn2BiAfxZy-ZNPuurp9reSQCLcBGAs/s640/trails-of-mt-daguldol.JPG"
       />
        </div>

        </>
)}
export default Destination