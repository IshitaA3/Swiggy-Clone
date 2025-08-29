import { FoodData } from "../Utils/FoodData";
import FoodCard from "./FoodCard";

export default function FoodOption(){
    return (
        <div className="w-[80%] container mx-auto  flex flex-wrap justify-center mt-20 gap-3">
            {
                FoodData.map((food) => <FoodCard key={food.id} food={food}></FoodCard> )
            }
        </div>
    )
}