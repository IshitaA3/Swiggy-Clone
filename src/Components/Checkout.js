import { useSelector } from "react-redux"
import Header3 from "./Header3"

export default function Checkout(){

    const {items, count} = useSelector(state => state.cart)

    const total = items.reduce((acc,item) => acc += (item.price/100 * item.quantity), 0);

    // console.log(items)

    return (
        <>
        <Header3/>
        <div className="h-auto min-h-[100vh] w-full p-16 bg-gray-200">
            <div className="bg-white rounded-3xl h-auto w-[80%] mx-auto mb-9 px-15 py-7">
                <div className="h-10 mb-9 border-b border-b-gray-300 border-dashed text-right px-5 font-bold text-gray-400">
                    {count} items
                </div>
                {
                    items.map(item => {
                        return (
                        <div key={item?.id} className="mb-7 flex justify-between items-center gap-5">
                            <div className="flex gap-5 items-center">
                                <div className={`p-1 border-2 rounded-sm w-[19px] h-[19px] text-center ${(item?.isVeg)? "border-green-700" : "border-red-700" }`} >
                                    <div className={`h-2 w-2 rounded-full ${(item?.isVeg)? "bg-green-700" : "bg-red-700" }`}>            
                                    </div>
                                </div>
                                <img className="h-30 w-30 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ item?.imageId} />
                                <div className="font-bold text-lg font-sans">{item?.name}</div>
                            </div>
                            {/* right part  */}
                            <div className="flex gap-8 items-center">
                                <div className=" w-27 text-center text-lg text-gray-700 font-bold border border-gray-400 px-2 py-2 rounded-2xl">Qty : <span className="text-green-800">{item.quantity}</span></div>
                                <div className="text-lg font-bold">₹{((item?.price)/100)*item?.quantity}</div>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
            <div className="bg-white rounded-3xl h-auto min-h-[30%] w-[80%] mx-auto px-15 py-7">
                <div className="h-10 mb-9 border-b border-b-gray-300 border-dashed text-sm text-right px-5 font-bold text-gray-400">
                    BILL DETAILS
                </div>
                <div className="">
                    <div className="flex justify-between items-center mb-3">
                        <div className="text-gray-600 text-lg">Item Total</div>
                        <div className=" text-lg text-gray-600 font-semibold">₹{total}</div>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                        <div className="text-gray-600 text-lg">Delivery Fee</div>
                        <div className=" text-lg text-gray-600 font-semibold">₹40.00</div>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                        <div className="text-gray-600 text-lg">GST & Other Charges</div>
                        <div className=" text-lg text-gray-600 font-semibold">₹24.49</div>
                    </div>
                    <div className="h-0 border-2 my-6"></div>
                    <div className="flex justify-between items-center mb-3">
                        <div className="text-black font-bold text-lg">TO PAY</div>
                        <div className=" text-lg text-black font-bold">₹{total+40.00+24.49}</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}