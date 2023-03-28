import React from 'react';
import {Routes, Route} from "react-router-dom";
import {CatalogPage} from './pages/CatalogPage';
import {ConstructorPage} from './pages/ConstructorPage';
import {DrawerPage} from './pages/DrawerPage';
import {InfoCardsPage} from './pages/InfoCardsPage';
import styles from './App.module.scss';


function App() {
    return (
        <div className={styles.page}>
            <Routes>
                <Route path="/" element={<CatalogPage/>}/>
                <Route path="/constructor" element={<ConstructorPage/>}/>
                <Route path='/basket' element={<DrawerPage/>}/>
                <Route path='/infoCard/:id' element={<InfoCardsPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
