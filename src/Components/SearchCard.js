import { useDispatch, useSelector } from 'react-redux'
import { addItems, incrementItems, decrementItems } from '../GlobalStore/cartSlicer'

export default function SearchCard({meal}){
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items)
    const element = items.find(item => item.id === meal.card.info.id);
    const count = element? element.quantity : 0; 

    function handleAdd(){
        dispatch(addItems(meal.card.info))
    }
    function handleIncrement(){
        dispatch(incrementItems(meal.card.info))
    }
    function handleDecrement(){
        dispatch(decrementItems(meal.card.info))
    }
    return (
        <>
        <div className="w-[50%] flex justify-between mx-auto mt-10">
            <div className="w-[70%]">
                <div className='flex gap-2 items-center'>
                    <div className={`p-1 border-2 rounded-sm w-[19px] h-[19px] text-center ${(meal?.card?.info?.isVeg)? "border-green-700" : "border-red-700" }`} >
                    <div className={`h-2 w-2 rounded-full ${(meal?.card?.info?.isVeg)? "bg-green-700" : "bg-red-700" }`}>            
                    </div>
                    </div>
                    <div className='text-orange-600 italic font-semibold'>{(meal?.card?.info?.isBestseller == true)? "Bestseller" : ""}</div>
                </div>
                <h2 className="font-bold text-lg text-gray-800">{meal?.card?.info?.name}</h2>
                <p>{"₹"+ (meal?.card?.info?.defaultPrice? meal?.card?.info?.defaultPrice/100 : meal?.card?.info?.price/100)}</p>
                {/* <div> */}
                    {
                    (Object.keys(meal?.card?.info?.ratings?.aggregatedRating).length == 0 ) && <div className="flex gap-1">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.63362 8.39604C1.28368 8.7446 1.28368 9.30972 1.63362 9.65828L6.1293 14.1362C6.47924 14.4848 7.0466 14.4848 7.39654 14.1362L12.9543 8.60038C13.1228 8.43251 13.2173 8.20468 13.2168 7.96728L13.2069 3.49924C13.2058 3.00785 12.8061 2.60977 12.3128 2.60868L7.827 2.5988C7.58866 2.59828 7.35993 2.69235 7.1914 2.86022L1.63362 8.39604ZM10.8177 6.90055C11.3458 6.37452 11.3439 5.51976 10.8134 4.99139C10.283 4.46302 9.4248 4.46113 8.89668 4.98717C8.36856 5.5132 8.37045 6.36796 8.90092 6.89633C9.43138 7.4247 10.2895 7.42659 10.8177 6.90055Z" fill="#1BA672"></path></svg>
                        <span className="text-xs font-semibold">{meal?.card?.info?.offerTags?.[0]?.title}</span>
                    </div> 
                    }
                    { (Object.keys(meal?.card?.info?.ratings?.aggregatedRating).length > 0 ) && <>
                        <span className= "text-sm mt-1 text-green-800 font-semibold">{"★ " + meal?.card?.info?.ratings?.aggregatedRating?.rating}</span>
                        <span className="text-sm font-semibold">{" ("+ meal?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 + ")"}</span>
                    </>
                }
                {/* </div> */}
                
                <p className=" mt-1 text-gray-500 text-sm overflow-hidden h-10 font-semibold"  >{meal?.card?.info?.description}</p>
            </div>
            <div className="relative">
                    <img className="h-36 w-39 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + meal?.card?.info?.imageId}></img>
                    {
                        (count == 0) ?
                            <button className="cursor-pointer font-bold border border-gray-300 bg-white text-green-600 absolute rounded-lg p-1 text-xl top-[87%] left-4 right-4 hover:bg-gray-200"
                                onClick={handleAdd}
                            >ADD</button>
                            :
                            <div className='flex justify-between font-bold border border-gray-300 bg-white text-green-600 absolute rounded-lg px-2 text-xl top-[87%] left-4 right-4'>
                                <button
                                    className='w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-200 text-xl font-bold rounded-l-lg'
                                    onClick={handleDecrement}
                                >
                                    -
                                </button>
                                <span className='flex items-center justify-center w-10'>{count}</span>
                                <button
                                    className='w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-200 text-xl font-bold rounded-r-lg'
                                    onClick={handleIncrement}
                                >
                                    +
                                </button>
                            </div>


                    }
            </div>
        </div>
                    <hr className="w-[50%] mt-15 mb-10 mx-auto bg-gray-300 h-[1px]"></hr>

        </>
    )
}