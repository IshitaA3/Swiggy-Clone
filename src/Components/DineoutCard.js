export default function DineoutCard({dine}){
    return (
        <div className="max-w-xl flex-none border border-gray-200 rounded-2xl">
            <a href={dine?.cta?.link}>
                <div className="relative">
                <img className="w-82 h-47 object-cover rounded-tl-2xl rounded-tr-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + dine?.info?.mediaFiles[0].url} />                
                <p className="text-white font-bold absolute text-base bottom-4 left-2 z-2">{dine?.info?.name}</p>
                <p className="text-white font-bold absolute text-base bottom-4 right-2 z-2">{dine?.info?.rating?.value}</p>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-16"></div>
                </div>
                <section className="pt-2 px-2 pb-3">
                <div className="flex justify-between items-baseline text-[13px] mt-2 text-[#02060C99]">
                <p>
                    {
                        dine.info.cuisines.join(" • ")
                    }
                </p>
                <p>{dine?.info?.costForTwo}</p>
                </div>
                <div className="flex justify-between mt-1 text-[13px] text-[#02060C99]">
                    <p>{dine?.info?.locationInfo?.formattedAddress}</p>
                    <p>{dine?.info?.locationInfo?.distanceString}</p>
                </div>
                <div className="mt-2 flex gap-2">
                    {
                        dine?.info?.vendorHighlights.map((value, index) => {
                            return <div key={index} className=" bg-[#F0F0F5] flex gap-1 items-baseline rounded p-1 text-xs text-[#02060C99]">
                                        <img className="w-3 h-3" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ value?.logo?.logo} />
                                        <p>{value.title}</p>
                                   </div>
                        } )
                    }
                </div>
                <div className="mt-2 bg-[#1BA672] p-2 rounded-xl flex text-white">
                    <img className="w-7 h-5 object-cover" src={"https://dineout-media-assets.swiggy.com/swiggy/image/upload/"+ dine?.info?.offerInfoV3?.offerLogo?.logo} ></img>
                    <p className="ml-2 text-sm font-bold">{dine?.info?.offerInfoV3?.vendorOffer?.title +" "+ dine?.info?.offerInfoV3?.vendorOffer?.subtitle}</p>
                    <p className="text-[13px] font-bold ml-4">{dine?.info?.offerInfoV3?.vendorOffer?.subtext}</p>
                </div>
                <div className="bg-[#C8F9E5] mt-3 p-2 rounded-xl">
                    <p className="text-[#1BA672]">{dine?.info?.customerOffer.infos[0].description}</p>
                </div>
                </section>
            </a>
        </div>
    )
}