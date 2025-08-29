import { useState } from "react"
import FoodMenu from "./FoodMenu"
import { FaAngleUp  } from "react-icons/fa";
import { FaAngleDown  } from "react-icons/fa";



export default function MenuCard({menuItems, selected, bestseller}){
    const [isOpen, setIsOpen] = useState(true);
    if(!isOpen){
        return (
            <>
            <div className="w-[50%] container mx-auto flex justify-between items-center"> 
                <h2 className="font-bold text-xl ">{menuItems?.title} ({menuItems?.itemCards?.length})</h2>
                <button onClick={()=> setIsOpen(!isOpen)} className="font-extrabold text-2xl cursor-pointer">{isOpen? <FaAngleUp size={24} />
                : <FaAngleDown size={24} /> }</button>
            </div>
                <div className="w-[50%] container mx-auto h-4 mt-10 mb-10 bg-gray-200"></div>
            </>
        )
    }
    if("categories" in menuItems){
        return (
            <div>
                {
                    menuItems.categories.map((categ) => <MenuCard key={categ.title} menuItems={categ} selected={selected} bestseller={bestseller}></MenuCard>)
                }
            </div>
        )
    }

    if(bestseller && selected === "veg"){
        return (<div className="w-[50%] container mx-auto"> 
                {
                  menuItems?.itemCards?.length>0 &&  <>
            <div className="flex justify-between">
                <h2 className="font-bold text-xl ">{menuItems?.title} ({menuItems?.itemCards?.length})</h2>
                <button onClick={()=> setIsOpen(!isOpen)} className="font-extrabold text-2xl cursor-pointer">{isOpen? <FaAngleUp size={24} />
                : <FaAngleDown size={24} /> }</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food) => (food?.card?.info.isBestseller && "isVeg" in food?.card?.info)).map((foodItems) => <FoodMenu key={foodItems?.card?.info?.id} foodItems={foodItems}></FoodMenu>)
                } 
            </div>
            <div className="w-full container mx-auto h-4 mt-10 mb-10 bg-gray-100"></div>
            </>
            }
        </div>)
    }

    if(bestseller && selected === "nonveg"){
        return (<div className="w-[50%] container mx-auto"> 
                {
                  menuItems?.itemCards?.length>0 &&  <>
            <div className="flex justify-between">
                <h2 className="font-bold text-xl ">{menuItems?.title} ({menuItems?.itemCards?.length})</h2>
                <button onClick={()=> setIsOpen(!isOpen)} className="font-extrabold text-2xl cursor-pointer">{isOpen? <FaAngleUp size={24} />
                : <FaAngleDown size={24} /> }</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food) => (food?.card?.info.isBestseller && !("isVeg" in food?.card?.info))).map((foodItems) => <FoodMenu key={foodItems?.card?.info?.id} foodItems={foodItems}></FoodMenu>)
                } 
            </div>
            <div className="w-full container mx-auto h-4 mt-10 mb-10 bg-gray-100"></div>
            </>
            }
        </div>)
    }

    if(bestseller == true && selected == "null"){
        return (<div className="w-[50%] container mx-auto"> 
                {
                  menuItems?.itemCards?.length>0 &&  <>
            <div className="flex justify-between">
                <h2 className="font-bold text-xl ">{menuItems?.title} ({menuItems?.itemCards?.length})</h2>
                <button onClick={()=> setIsOpen(!isOpen)} className="font-extrabold text-2xl cursor-pointer">{isOpen? <FaAngleUp size={24} />
                : <FaAngleDown size={24} /> }</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food) => (food?.card?.info.isBestseller)).map((foodItems) => <FoodMenu key={foodItems?.card?.info?.id} foodItems={foodItems}></FoodMenu>)
                } 
            </div>
            <div className="w-full container mx-auto h-4 mt-10 mb-10 bg-gray-100"></div>
            </>
            }
        </div>)
    }

    if(selected === "veg"){
        return (<div className="w-[50%] container mx-auto"> 
                {
                  menuItems?.itemCards?.length>0 &&  <>
            <div className="flex justify-between">
                <h2 className="font-bold text-xl ">{menuItems?.title} ({menuItems?.itemCards?.length})</h2>
                <button onClick={()=> setIsOpen(!isOpen)} className="font-extrabold text-2xl cursor-pointer">{isOpen? <FaAngleUp size={24} />
                : <FaAngleDown size={24} /> }</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food) => ("isVeg" in food?.card?.info)).map((foodItems) => <FoodMenu key={foodItems?.card?.info?.id} foodItems={foodItems}></FoodMenu>)
                } 
            </div>
            <div className="w-full container mx-auto h-4 mt-10 mb-10 bg-gray-100"></div>
            </>
            }
        </div>)
    }

    if(selected === "nonveg"){
        return (<div className="w-[50%] container mx-auto"> 
                {
                  menuItems?.itemCards?.length>0 &&  <>
            <div className="flex justify-between">
                <h2 className="font-bold text-xl ">{menuItems?.title} ({menuItems?.itemCards?.length})</h2>
                <button onClick={()=> setIsOpen(!isOpen)} className="font-extrabold text-2xl cursor-pointer">{isOpen? <FaAngleUp size={24} />
                : <FaAngleDown size={24} /> }</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food) => !("isVeg" in food?.card?.info)).map((foodItems) => <FoodMenu key={foodItems?.card?.info?.id} foodItems={foodItems}></FoodMenu>)
                } 
            </div>
            <div className="w-full container mx-auto h-4 mt-10 mb-10 bg-gray-100"></div>
            </>
            }
        </div>)
    }

    return (
        <div className="w-[50%] container mx-auto"> 
                {
                  menuItems?.itemCards?.length>0 &&  <>
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-xl ">{menuItems?.title} ({menuItems?.itemCards?.length})</h2>
                <button onClick={()=> setIsOpen(!isOpen)} className="font-extrabold text-2xl cursor-pointer">{isOpen? <FaAngleUp size={24} />
                : <FaAngleDown size={24} /> }</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.map((foodItems) => <FoodMenu key={foodItems?.card?.info?.id} foodItems={foodItems}></FoodMenu>)
                } 
            </div>
            <div className="w-full container mx-auto h-4 mt-10 mb-10 bg-gray-100"></div>
</>
}
        </div>
    )
}


{/* <svg aria-hidden="true" height="16" width="16" class="sc-jxOSlx hRhqAA"><use xlink:href="/food/sprite-CiiAtHUR.svg#nonvegNonVeg16"></use></svg> */}