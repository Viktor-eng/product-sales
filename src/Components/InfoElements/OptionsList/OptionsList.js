import styles from './OptionsList.module.scss'
import Options from "../Options/Options";
import {useState} from "react";

function OptionsList(props) {

    const arrayOptions = [
        {
            price: 1000,
            options: 'Опция №1'
        },
        {
            price: 1500,
            options: 'Опция №2'
        },
        {
            price: 1500,
            options: 'Опция №3'
        },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}> Дополнительные опции модели</div>
            <div className={`${styles.optionsList}`}>
                {arrayOptions.map((obj) => (
                    <Options
                        options={obj.options}
                        price={obj.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default OptionsList;