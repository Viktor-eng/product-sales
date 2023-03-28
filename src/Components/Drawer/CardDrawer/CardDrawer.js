import styles from './CardDrawer.module.scss';
import {useState} from "react";

function CardDrawer(props) {
    const [isChecked, setIsChecked] = useState(false)

    const changeChecked = () => {
        setIsChecked(!isChecked);
    }

    return (
        <div className={styles.wrapper}>
            <div className="d-flex">
                <div className={`d-flex align-center`}>
                    {isChecked ?
                        <div className={`cu-p ${styles.marginRight8px}`}><img src="/img/CardDrawer/checkboxActive.svg"
                                                                              alt="Галочка"
                                                                              onClick={changeChecked}/></div>
                        :

                        <div className={`cu-p ${styles.marginRight8px}`}><img src="/img/CardDrawer/checkbox.svg"
                                                                              alt="Галочка активная"
                                                                              onClick={changeChecked}/></div>
                    }
                    <div><img width={160} height={160} src={props.imgUrl} alt="Картинка модели"/></div>
                </div>
                <div className={styles.wrapperContentDrawer}>
                    <div className={styles.headerCard}>{props.name}</div>
                    <div className={`${styles.content} ${styles.marginTop12px}`}>{props.category}</div>
                    <div className={styles.marginTop12px}><img width={120} height={40} src="/img/CardDrawer/stepper.svg"
                                                               alt=""/></div>
                    <div className={`${styles.priceCardContent} ${styles.marginTop12px}`}>Цена: {props.price} рублей
                    </div>
                </div>
                <div>
                    <img className="cu-p" src="/img/CardDrawer/close.svg" alt="кнопка удалить"/>
                </div>
            </div>
        </div>
    );
}

export default CardDrawer;