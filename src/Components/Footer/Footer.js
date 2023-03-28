import styles from './Footer.module.scss'
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div>
            <div className={styles.wrapper}>
                <div className="d-flex justify-between">
                    <div>
                        <div className={styles.header}>Cвязаться с нами</div>
                        <Link to={'/basket'}>
                            <button className={styles.buttonApplication}>Оставить заявку</button>
                        </Link>
                    </div>
                    <div className={`d-flex pt-10 ${styles.headerChild}`}>
                        <div className={` ${styles.headerChild}`}>Каталог продукции
                            <div className={styles.headerChildNotWeight}><Link to={'/'}><span>Каталог</span></Link>
                            </div>
                        </div>
                        <div className={styles.headerChild}>О компании
                            <div className={styles.headerChildNotWeight}><span>Контакты</span></div>
                            <div className={styles.headerChildNotWeight}><Link
                                to={'/basket'}><span>Корзина</span></Link></div>
                        </div>
                        <div className={styles.headerChild}>Соцсети
                            <div className={styles.headerChildNotWeight}><span>VK</span></div>
                            <div className={styles.headerChildNotWeight}><span>Youtube</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`d-flex justify-between ${styles.privacyPolicy}`}>
                <div className={styles.content}>ООО "Томсккабель"</div>
                <div className={styles.content}><span>Политика конфиденциальности</span></div>
            </div>
        </div>
    );
}

export default Footer;
