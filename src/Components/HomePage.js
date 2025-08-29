import Header from "./Header"
import FoodOption from "./FoodOption"
import GroceryOption from "./GroceryOption"
import DineoutOption from "./DineoutOption"
import SwiggyBanner from "./Swiggybanner"


export default function HomePage(){
    return (
        <>
            <Header></Header>
            <FoodOption></FoodOption>
            <GroceryOption></GroceryOption>
            <DineoutOption></DineoutOption>
            <SwiggyBanner></SwiggyBanner>
        </>
    )
}