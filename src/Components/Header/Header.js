import styles from './Header.module.scss'
import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className={`d-flex ${styles.wrapper} justify-center`}>
            <div className={`d-flex align-center`}>
                <div className={styles.label}>
                    <Link to={'/'}> <img width={198} height={27.05} src="/img/Header/logo.svg" alt="Логотип"/></Link>
                </div>
                <div className="d-flex align-center">
                    <Link className={styles.headers} to={'/'}>Каталог</Link>
                    <div className={styles.headers}>Компания</div>
                    <div className={styles.headers}>Контакты</div>
                    <div className={styles.card}>
                        <Link to={'/basket'}>
                            <img
                                src="/img/Header/card.svg" alt="Корзина"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
