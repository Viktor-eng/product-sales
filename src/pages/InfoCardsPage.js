import Header from "../Components/Header/Header";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import React, {useEffect} from "react";
import InfoCardsList from "../Components/InfoElements/InfoCardsList/InfoCardsList";

const InfoCardsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <Header/>
            <InfoCardsList/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export {InfoCardsPage};