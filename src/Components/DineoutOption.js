import {DineoutData} from "../Utils/DineoutData"
import DineoutCard from "./DineoutCard";

export default function RestaurantOption(){
    return (
        <div className ="w-[80%] mt-20 container mx-auto mb-20">
            <h2 className = "font-bold text-2xl">Discover best restaurants on Dineout</h2>
            <div className="flex flex-nowrap overflow-x-auto gap-8 mt-5">
                {
                    DineoutData.map((dine) => <DineoutCard key={dine.info.id} dine={dine}></DineoutCard>)
                }
            </div>
        </div>
    )
}