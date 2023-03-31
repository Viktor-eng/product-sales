import styles from './TitlePageConstructor.module.scss'
import InfoCardsListConstructor from "../InfoCardsListConstructor/InfoCardsListConstructor";
import TitleCardConstructor from "../TitleCardConstructor/TitleCardConstructor";
import {useState} from "react";

function TitlePageConstructor(props) {

    const arrayCards = [
        {
            name: 'Отдатчик',
            imgUrl: '/img/CardTitle/recoil.jpg',
            id: 1,
            isActive: false

        },
        {
            name: 'Компенсатор',
            imgUrl: '/img/CardTitle/сompensator.jpg',
            id: 2,
            isActive: false
        },
        {
            name: 'Тяга',
            imgUrl: '/img/CardTitle/thrust.jpg',
            id: 3,
            isActive: false
        },
        {
            name: 'Экструзионная головка',
            imgUrl: '/img/CardTitle/extrusionHeads.jpg',
            id: 4,
            isActive: false
        },
        {
            name: 'Ванна',
            imgUrl: '/img/CardTitle/bath.jpg',
            id: 5,
            isActive: false
        },
        {
            name: 'Тяга',
            imgUrl: '/img/CardTitle/thrust.jpg',
            id: 6,
            isActive: false
        },
        {
            name: 'Приемник 1',
            imgUrl: '/img/CardTitle/recoil.jpg',
            id: 7,
            isActive: false
        },
        {
            name: 'Приемник 2',
            imgUrl: '/img/CardTitle/recoil.jpg',
            id: 7,
            isActive: false
        }
    ];

    const [elementClick, setElementCLick] = useState(0);

    const [array, setArray] = useState(arrayCards);

    const changeCardStatusById = (id) => {
        setArray(prev => prev.map(el => el.id === id ? {...el, isActive: true}: el))
    }

    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.constructor}>Конструктор</div>
                <div className={`d-flex flex-wrap ${styles.gap32px}`}>
                    {array.map((obj) => (
                        <TitleCardConstructor
                            key={obj.id}
                            name={obj.name}
                            imgUrl={obj.imgUrl}
                            isActive={obj.isActive}
                            onClick={() => {setElementCLick(obj.id);}}

                        />
                    ))}
                </div>
            </div>
            <InfoCardsListConstructor elemClick={elementClick}
                                      changeCardColor = {changeCardStatusById}/>
        </div>
    );
}

export default TitlePageConstructor;
