//div 1 : Swiggy logo, navs
//div 2 : one liner , input box
//div 3 : 4 cards
import { Link } from "react-router"
import RestaurantPage from "./RestaurantPage"

export default function Header(){
    return (
        <header className="bg-[#ff5200] font-serif">
            <div className="flex justify-between container mx-auto py-8 max-w-7xl">
                <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" />
                <div className="text-white text-base font-bold flex gap-12 items-center">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                    <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                    <a className="border border-white py-3 px-4 rounded-2xl" target="_blank" href="#">Get the App</a>
                    <a className="border border-black  py-3 px-10 bg-black rounded-2xl" target="_blank" href="#">Sign in </a>
                </div>
            </div>
            <div className="pt-16 pb-8 relative">
                <img className="w-62 h-112 absolute top-0 left-0"  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" />
                <img  className="w-62 h-112 absolute top-0 right-0"  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" />
                <div className="container mx-auto text-center max-w-[60%] text-5xl text-white font-bold">
                    Order food & groceries. Discover best restaurants. Swiggy it!
                </div>
                <div className="max-w-[70%] container mx-auto flex justify-center gap-5 mt-10">
                    <input className="bg-white w-[30%] px-6 py-4 rounded-2xl text-xl" type="text" placeholder="Delhi, India" />
                    <input className="bg-white w-[50%] px-6 py-4 rounded-2xl text-xl" type="text" placeholder="Search for restaurant, item or more" />
                </div>
            </div>
            <div className="max-w-[80%] flex justify-center container mx-auto">
                <Link to="/restaurants" >
                    <img className="w-85 h-78" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" />
                </Link>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img className="w-85 h-78" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" />
                </a>
                <a href="https://www.swiggy.com/dineout">
                    <img className="w-85 h-78" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" />
                </a>
            </div>
        </header>
    )
}