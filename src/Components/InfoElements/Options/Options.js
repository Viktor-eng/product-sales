import styles from './Options.module.scss'
import {useState} from "react";

function Options(props) {

    const [isChecked, setIsChecked] = useState(false)

    const changeChecked = () => {
        setIsChecked(!isChecked);
    }

    return (
        <div className={` d-flex justify-between ${styles.wrapper}`}>
            <div className={` d-flex justify-between ${styles.optionsText} ${styles.gap20px}`}>
                {isChecked ?
                    <div className={`cu-p `}><img src="/img/Options/checkboxActive.svg" alt="Нет галочки"
                                                  onClick={changeChecked}/>
                    </div>
                    :
                    <div className={`cu-p `}><img src="/img/Options/checkbox.svg" alt="Галочка установлена"
                                                  onClick={changeChecked}/>
                    </div>}

                <div>{props.options}</div>
            </div>
            <div className={`d-flex ${styles.optionsText} ${styles.gap5px}`}>
                <div>Цена: {props.price} рублей</div>
                <div></div>
            </div>
        </div>
    );
}

export default Options;