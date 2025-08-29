export default function GroceryCard ({groc}){
    return (
        <div className="flex-none w-45">
            <a href={groc?.action?.link}>
                <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + groc?.imageId} />
                <h1 className="text-gray-800 text-base text-center font-bold w-40">{groc?.action?.text}</h1>
            </a>
        </div>
    )

}