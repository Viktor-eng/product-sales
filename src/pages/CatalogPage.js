import React, {useEffect} from "react";
import Header from "../Components/Header/Header";
import ListCards from "../Components/Catalog/ListCards/ListCards";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

const CatalogPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <Header/>
            <ListCards/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export {CatalogPage};
