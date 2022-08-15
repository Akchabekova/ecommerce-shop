import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import {getCatalog} from "./redux/slices/catalogSlice";
import {useDispatch} from "react-redux";
import {data} from "./data";
import Register from "./pages/Register";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCatalog(data))
    }, [])
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/*" element={<NotFound/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
