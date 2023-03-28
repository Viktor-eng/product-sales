import Header from "../Components/Header/Header";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import React, {useEffect} from "react";
import TitlePageConstructor from "../Components/Constructor/TitlePageConstructor/TitlePageConstructor";

const ConstructorPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <Header/>
            <TitlePageConstructor/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export {ConstructorPage};