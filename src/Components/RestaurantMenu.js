import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";
// import { RxCross2 } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router";
import Shimmer from "./Shimmer";
// import Header2 from "./Header2";



export default function RestaurantMenu(){
    let {id}  = useParams();
    const [selected, setSelected] = useState("null")
    const [bestseller, setBestseller] = useState(false)
    const aboutRest = useRef(null)
    // console.log(id);
    const [restData, setRestData] = useState([]);
    useEffect(()=>{
        async function fetchData(){
        const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyAPI =  `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`
        const response = await fetch(proxyServer+swiggyAPI)
        const data = await response.json();
        aboutRest.current = data?.data?.cards?.[2]?.card?.card?.info;
        const data2 = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const filteredData = data2.filter(item => 'title' in item?.card?.card);
        setRestData(filteredData)
        }
        fetchData();
    },[])

    // console.log(aboutRest.current);
    // console.log(restData?.card?.card)
    
    return (
        <div className="">
            {
                (restData.length === 0)? <Shimmer /> :
                <>
                    <div className="m-auto w-[50%] mt-10 ">
                <h2 className="text-4xl font-bold">{aboutRest?.current?.name}</h2>
                <div className="mt-5 py-4 px-3 border border-gray-200 rounded-2xl shadow-lg shadow-gray-600/90">
                    <div className="flex gap-2 items-center mb-2">
                        <span className="w-4 h-4 bg-green-700 rounded-full flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            viewBox="0 0 24 24"
                            className="w-2.5 h-2.5"
                        >
                            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.808 1.548 8.243L12 18.896l-7.484 4.461 1.548-8.243L0 9.306l8.332-1.151z" />
                        </svg>
                        </span>
                        <span className="text-sm font-semibold">{aboutRest?.current?.avgRatingString} ({aboutRest?.current?.totalRatingsString}) • {aboutRest?.current?.costForTwoMessage}</span>
                    </div>
                    <div className="text-sm font-bold text-[#ff5200] mb-2 ">
                        {
                            aboutRest?.current?.cuisines.join(', ')
                        }
                    </div>
                    <div className="ml-2 mb-2">
                        <span className="text-sm font-bold">Outlet</span>
                        <span className="ml-1 text-sm text-gray-500 font-bold">{aboutRest?.current?.areaName}</span>
                    </div>
                    <div className="ml-2 text-sm font-semibold ">{aboutRest?.current?.sla?.minDeliveryTime}-{aboutRest?.current?.sla?.maxDeliveryTime} mins</div>
                </div>
            </div>
            <Link to={`/city/delhi/${id}/search`}>
            <div className="mt-20 container ml-[25vw] cursor-pointer w-[50%] h-12 text-gray-600 font-semibold py-3 rounded-xl bg-gray-100 relative">
                <div className="absolute left-[42%]"> Search for dishes</div>
                <IoIosSearch className="absolute right-3" size={24} />
            </div>
            </Link>
            <div className="m-auto mt-8 w-[50%] mb-16">
                <button className={`cursor-pointer text-base mr-4 py-1 px-4 border-2 rounded-2xl w-20 ${selected === "veg" ? "bg-green-700 text-white" : "bg-white border-green-700 text-green-700"}`} onClick={()=> setSelected((selected == "veg")? "null" : "veg") }>veg</button>
                <button className={`cursor-pointer text-base mr-4 py-1 px-4 border-2 rounded-2xl ${selected === "nonveg" ? "bg-red-700 text-white" : "bg-white border-red-700 text-red-700"}`} onClick={()=> setSelected((selected == "nonveg")? "null" : "nonveg") }>non-veg</button>
                <button className={`cursor-pointer text-base italic text-gray-700 font-semibold mr-4 py-1 px-4 border-1 rounded-2xl ${(bestseller) ? "border-gray-600 bg-gray-100" : "border-gray-300 bg-white"}`} onClick={()=> setBestseller(!bestseller)}> Bestseller </button>
            </div>
            <div className="w-[50%] container mx-auto h-4 mt-10 mb-10 bg-gray-200"></div>
            <div>
            {
                restData.map((menuItems) => <MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} selected={selected} bestseller={bestseller}></MenuCard>)
            }
            </div>
                </>
            }
        </div>
    )
}

// key={restData?.card?.card?.title}