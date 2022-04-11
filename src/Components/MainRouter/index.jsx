import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "src/Pages/Home";
import { HOME_ROUTE, PRODUCT_DETAIL_ROUTE, ABOUT_ROUTE } from "src/Constants/Router";
import Products from "src/Pages/Products";
import About from "src/Pages/About";
import NavBar from "src/Components/NavBar";


const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={PRODUCT_DETAIL_ROUTE} element={<Products />} />
        <Route path={ABOUT_ROUTE} element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default MainRouter;
