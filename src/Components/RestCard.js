import { Link } from "react-router";

export default function RestCard({rests}){
    return(
        <Link to={"/city/delhi/" + rests?.info?.id}>
        <div className="max-w-[272px] flex-none transform transition duration-100 hover:scale-95">
            <div className="relative">
                <img className="w-68 h-46 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + rests?.info?.cloudinaryImageId} />
                <p className="absolute bottom-2 left-2 z-2 text-white text-xl font-bold">{rests?.info?.aggregatedDiscountInfoV3?.header + " " + rests?.info?.aggregatedDiscountInfoV3?.subHeader}</p>
                <div className="rounded-b-xl absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-15"></div>
                
            </div>
            <div className="mt-2 px-3">
                    <h2 className="overflow-hidden h-7 font-bold text-lg">{rests?.info?.name}</h2>
                    <div className="flex gap-1 items-center">
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
                    <span className="font-semibold text-sm ">{rests?.info?.avgRating + " • " + rests?.info?.sla?.slaString}</span>
                    </div>
                    <div className="text-[#02060C99] text-sm h-6 overflow-hidden">
                        {
                            rests?.info?.cuisines.join(', ')
                        }
                    </div>
                    <p className="text-[#02060C99] text-sm">{rests?.info?.areaName}</p>
            </div>

        </div>
        </Link>
    )
}


// {
// "info": {
// "id": "16866",
// "name": "Pizza Hut",
// "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/135f09ab-8f1b-4185-8d77-73f5fcd99d77_16866.JPG",
// "locality": "Sector 3",
// "areaName": "Rohini",
// "costForTwo": "₹350 for two",
// "cuisines": [
// "Pizzas"
// ],
// "avgRating": 4.3,
// "parentId": "721",
// "avgRatingString": "4.3",
// "totalRatingsString": "6.7K+",
// "sla": {
// "deliveryTime": 19,
// "lastMileTravel": 2.2,
// "serviceability": "SERVICEABLE",
// "slaString": "15-20 mins",
// "lastMileTravelString": "2.2 km",
// "iconType": "ICON_TYPE_EMPTY"
// },
// "availability": {
// "nextCloseTime": "2025-07-02 02:45:00",
// "opened": true
// },
// "badges": {},
// "isOpen": true,
// "type": "F",
// "badgesV2": {
// "entityBadges": {
// "imageBased": {},
// "textBased": {},
// "textExtendedBadges": {}
// }
// },
// "aggregatedDiscountInfoV3": {
// "header": "ITEMS",
// "subHeader": "AT ₹59"
// },
// "differentiatedUi": {
// "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
// "differentiatedUiMediaDetails": {
// "lottie": {},
// "video": {}
// }
// },
// "reviewsSummary": {},
// "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
// "restaurantOfferPresentationInfo": {},
// "externalRatings": {
// "aggregatedRating": {
// "rating": "--"
// }
// },
// "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
// },
// "analytics": {
// "context": "seo-data-71c56876-a752-4400-bb21-962a6a394533"
// },
// "cta": {
// "link": "https://www.swiggy.com/city/delhi/pizza-hut-sector-3-rohini-rest16866",
// "type": "WEBLINK"
// }
// }