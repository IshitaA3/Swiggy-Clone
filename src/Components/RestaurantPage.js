import {useEffect, useState} from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import Header2 from "./Header2";

export default function RestaurantPage(){
    const [restData, setRestData] = useState([]);
    useEffect(() =>{
        async function fetchData(){
            const proxyServer = "https://cors-anywhere.herokuapp.com/"
            const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
            const response = await fetch(proxyServer + swiggyAPI);
            const data = await response.json();
            setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        fetchData();
    }, []);

    function ByRating(){
        const dataByRating = restData.filter(rests => rests?.info?.avgRating >= 4.0)
        setRestData(dataByRating)
    }
        

    return (
        <>
            {/* <Header2></Header2> */}
            <div className="mt-8 w-[80%] container mx-auto">
                <h2 className="font-bold text-xl" >Restaurants with online food delivery in Delhi</h2>
                {
                    (restData.length == 0)? <Shimmer/> : 
                    (
                <>
                <div className=" w-[80%] mt-5">
                    <button className=" border border-gray-500 px-2 py-1 rounded-3xl" onClick={ByRating}>Ratings 4.0+</button>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mt-5">
                    {
                        restData.map((rests) => <RestCard key={rests?.info?.id} rests={rests} ></RestCard>)
                    }
                </div>
            </>    
                    )}
            </div>
        </>
    )
    
}