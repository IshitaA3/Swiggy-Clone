import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantPage from "./Components/RestaurantPage";
import {BrowserRouter, Routes, Route} from "react-router";
import HomePage from "./Components/HomePage";
import RestaurantMenu from "./Components/RestaurantMenu";
import SearchFood from "./Components/SearchFood";
import Header2 from "./Components/Header2";
import { store } from "./GlobalStore/store";
import {Provider} from 'react-redux'
import Checkout from "./Components/Checkout";


function App(){

    return(
        <>
            <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route element={<Header2/>}>
                    <Route path="/restaurants" element={<RestaurantPage/>}> </Route>
                    <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
                    <Route path="/city/delhi/:id/search" element={<SearchFood/>}></Route>
                    </Route>
                    <Route path="/checkout" element={<Checkout/>}></Route>
                </Routes>
            </BrowserRouter>
            </Provider>
        </>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)