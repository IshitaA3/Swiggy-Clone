export default function FoodCard({food}) {
    return (
        <>
            <a href={food?.action?.link}>
                <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+food?.imageId} />
            </a>
        </>

    )
}