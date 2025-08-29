import {Grocery} from "../Utils/Grocery";
import GroceryCard from "./GroceryCard";

export default function GroceryOption(){
    return (
        <div className="container mx-auto w-[80%] mt-20">
            <h3 className="text-2xl font-bold">Shop Groceries on Instamart</h3>
            <div className="container mx-auto flex flex-nowrap overflow-x-auto gap-5 mt-8">
                {
                    Grocery.map((groc) => <GroceryCard key={groc.id} groc={groc}></GroceryCard>)
                }
            </div>
        </div>
    )
}