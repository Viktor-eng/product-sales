import Header from "../Components/Header/Header";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import React, {useEffect} from "react";
import ListDrawerCards from "../Components/Drawer/ListDrawerCards/ListDrawerCards";

const DrawerPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <Header/>
            <ListDrawerCards/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export {DrawerPage};