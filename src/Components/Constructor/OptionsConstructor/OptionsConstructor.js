import styles from './OptionsConstructor.module.scss'
import {useState} from "react";

function OptionsConstructor(props) {
    const [isChecked, setIsChecked] = useState(false)

    const changeChecked = () => {
        setIsChecked(!isChecked);
    }

    return (
        <div className={` d-flex justify-between ${styles.wrapper}`}>
            <div className={` d-flex justify-between ${styles.optionsText} ${styles.gap20px}`}>
                {isChecked ?
                    <div className={`cu-p ${styles.marginLeft20px} `}><img src="/img/Options/checkboxActive.svg"
                                                                           alt="Галочка"
                                                                           onClick={changeChecked}/>
                    </div>
                    :
                    <div className={`cu-p ${styles.marginLeft20px} `}><img src="/img/Options/checkbox.svg"
                                                                           alt="Галочка"
                                                                           onClick={changeChecked}/></div>
                }
                <div>{props.options}</div>
            </div>
            <div className={`d-flex ${styles.optionsText} ${styles.gap20px}`}>
                <div>Цена: {props.price} рублей</div>
                <div></div>
            </div>
        </div>
    );
}

export default OptionsConstructor;