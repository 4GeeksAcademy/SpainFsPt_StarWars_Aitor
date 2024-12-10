import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { DetailsPeople } from "./views/details.jsx";
import { DetailsPlanets } from "./views/detailsPlanets.jsx";
import { DetailsVehicles } from "./views/detailsVehicles.jsx";

//create your first component
const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/details/:uid" element={<DetailsPeople />} />
                        <Route path="/detailsPlanets/:uid" element={<DetailsPlanets />} />
                        <Route path="/detailsVehicles/:uid" element={<DetailsVehicles />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
