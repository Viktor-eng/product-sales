import styles from './ConstructorInTitle.module.scss'
import {Link} from "react-router-dom";

function ConstructorInTitle(props) {
    return (
        <div className={styles.link}>
            <Link to={'/constructor'}>
                <div className={`d-flex flex-column justify-center align-center cu-p ${styles.wrapper}`}>
                    <img width={20} height={20} src="/img/ConstructorInTitle/plus.svg" alt="Карта"/>
                    <div className={styles.header}>Конструктор</div>
                </div>
            </Link>
        </div>
    );
}

export default ConstructorInTitle;
