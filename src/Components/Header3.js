import { Outlet } from "react-router";
import { Link } from "react-router";
import { useSelector } from "react-redux";

export default function Header3(){

    const count = useSelector(state => state.cart.count);

    return (
        <>
        <header className="px-23 py-3 justify-between container mx-auto flex items-center font-serif relative">
            <Link to="/">
            <img className="w-14 h-14 mb-3 rounded-xl cursor-pointer" src="data:image/png;base64,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" />
            </Link>
            <div className="text-lg text-gray-700 font-bold font-sans">SECURE CHECKOUT</div>
            {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-gray-200  to-transparent h-4"></div> */}
        </header>
        </>
    )
}