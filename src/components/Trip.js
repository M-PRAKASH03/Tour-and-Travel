
import TripData from "./TripData";
import "./TripStyles.css"



function Trip(){
    return (
        <>

<div className="trip-continar">
        <div className="trip" >
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Foogle Maps.</p>
        </div>

        <div className="tripcard">
        <TripData
        img = "https://www.holidify.com/images/bgImages/BALI.jpg"
        heading = "Trip in Indonesia"
        text = "Indonesia's most famous island, is located to the west of Java in the Lesser Sunda Islands. It is world-renowned for its scenic rice terraces, fragrant cuisine, stunning beaches and a galore of culture and tradition."
        />
        <TripData
        img = "https://www.holidify.com/images/bgImages/MALAYSIA.jpg"
        heading = "Trip in Malaysia"
        text = "Malaysia is a great nation renowned for exhibiting a unique fusion of traditional, ancient customs and culture with a touch of technology. With all the Malaysia tourism attractions, including stunning islands, beaches, tiny villages, heritage sites, and adventure destinations."
        />
        <TripData
        img = "https://ihplb.b-cdn.net/wp-content/uploads/2021/11/eifel-tower.jpg"
        heading = "Trip in France"
        text = "France is, rightfully, among the most popular tourist destinations in the world. With its majestic historical structures, rich culture and culinary delights, France enthrals its visitors like no other. France is mainly known for its wine, fashion and culture."
        />
        </div>
        

        </div>
        </>
    );
}
export default Trip