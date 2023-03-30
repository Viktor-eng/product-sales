import styles from './TitlePageConstructor.module.scss'
import InfoCardsListConstructor from "../InfoCardsListConstructor/InfoCardsListConstructor";
import TitleCardConstructor from "../TitleCardConstructor/TitleCardConstructor";
import {useState} from "react";

function TitlePageConstructor() {

    const [elementClick, setElementCLick] = useState(0);

    const arrayCards = [
        {
            name: 'Отдатчик',
            imgUrl: '/img/CardTitle/recoil.jpg',
            id: 1
        },
        {
            name: 'Компенсатор',
            imgUrl: '/img/CardTitle/сompensator.jpg',
            id: 2
        },
        {
            name: 'Тяга',
            imgUrl: '/img/CardTitle/thrust.jpg',
            id: 3
        },
        {
            name: 'Экструзионная головка',
            imgUrl: '/img/CardTitle/extrusionHeads.jpg',
            id: 4
        },
        {
            name: 'Ванна',
            imgUrl: '/img/CardTitle/bath.jpg',
            id: 5
        },
        {
            name: 'Тяга',
            imgUrl: '/img/CardTitle/thrust.jpg',
            id: 6
        },
        {
            name: 'Приемник 1',
            imgUrl: '/img/CardTitle/recoil.jpg',
            id: 7
        },
        {
            name: 'Приемник 2',
            imgUrl: '/img/CardTitle/recoil.jpg',
            id: 7
        }
    ];

    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.constructor}>Конструктор</div>
                <div className={`d-flex flex-wrap ${styles.gap32px}`}>
                    {arrayCards.map((obj) => (
                        <TitleCardConstructor
                            key={obj.id}
                            name={obj.name}
                            imgUrl={obj.imgUrl}
                            onClick={() => {setElementCLick(obj.id);}}
                        />
                    ))}
                </div>
            </div>
            <InfoCardsListConstructor elemClick={elementClick}/>
        </div>
    );
}

export default TitlePageConstructor;
