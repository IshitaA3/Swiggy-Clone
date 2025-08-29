import { IoIosSearch } from "react-icons/io";
import { BsArrowLeft } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import FoodMenu from "./FoodMenu";
import SearchCard from "./SearchCard";
import { Link } from "react-router";

export default function SearchFood(){
    const {id} = useParams();
    const [food, setFood] = useState("");
    const [restData, setRestData] = useState([])
    // const aboutRest = useRef(null)

    useEffect(()=>{
            async function fetchData(){
            const proxyServer = "https://cors-anywhere.herokuapp.com/"
            const swiggyAPI =  `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`
            const response = await fetch(proxyServer+swiggyAPI)
            const data = await response.json();
            // aboutRest.current = data?.data?.cards?.[2]?.card?.card?.info;
            const data2 = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filteredData = data2.filter(item => 'title' in item?.card?.card);
            setRestData(filteredData)
            }
            // if(food.length>1)
                fetchData();
        },[])
        // console.log(aboutRest?.current)
        const foodItems = restData
        .map(item => item?.card?.card?.itemCards)   // get itemCards from each
        .filter(Boolean)                            // remove undefined
        .flat()                                     // flatten into a single array
        .filter(item => item?.card?.info?.name.toLowerCase().includes(food.toLowerCase()));    // filter items with name
        // const newData = [...new Set(foodItems)]
        const newData = Array.from(
        new Map(
            foodItems.map(item => [item?.card?.info?.id, item])  // key = id, value = item
        ).values()
        );
        // console.log(newData);

    return (
        <div>
            <div className="w-[55%] mx-auto mt-15 h-10 border-b-1 border-b-gray-200 relative flex">
                {/* back arrow */}
                <Link to={`/city/delhi/${id}`}>
                < BsArrowLeft size={24} className="absolute left-2"  />
                </Link>
                {/* search bar */}
                <input type="text" value={food} placeholder="Search"  className="font-semibold absolute focus:outline-none left-12" onChange={(e) => setFood(e.target.value)} />
                {/* searcrh icon */}
                <IoIosSearch size={23} className="absolute right-2" />
                {/* <div className="h-1 border"></div> */}
            </div>
            {/* <FoodMenu foodItems={foodItems} /> */}
            {/* { (newData.length==0)? "" :  */}
            <div>
                {
                    newData.map(meal => <SearchCard key={meal?.card?.info?.id} meal={meal} />)
                }
            </div>
            {/* } */}
        </div>
    )
}