import styles from './InfoCardsListConstructor.module.scss'
import InfoCardConstructor from "../InfoCardConstructor/InfoCardConstructor";
import OptionsListConstructor from "../OptionsListConstructor/OptionsListConstructor";


function InfoCardsListConstructor(props) {


    const arrayHeaderModels = [
        {
            name: 'Ванна, модель 1',
            price: 10000,
            content: 'Крутая ванна',
            imgUrl: '/img/InfoCardsList/bathModels/model1/1.jpg',
            idCardTitle: 5,
            idItem: 1
        },
        {
            name: 'Компенсатор, модель 1',
            price: 10000,
            content: 'Крутой компенсатор',
            imgUrl: '/img/InfoCardsList/compensatorModels/model1/1.jpg',
            idCardTitle: 2,
            idItem: 1

        },
        {
            name: 'Компенсатор, модель 2',
            price: 10000,
            content: 'Крутой компенсатор',
            imgUrl: '/img/InfoCardsList/compensatorModels/model2/2.jpg',
            idCardTitle: 2,
            idItem: 2
        },
        {
            name: 'Отдатчик, модель 1',
            price: 10000,
            content: 'Крутой отдатчик',
            imgUrl: '/img/InfoCardsList/recoilModels/model1/1.jpg',
            idCardTitle: 1,
            idItem: 1
        },
        {
            name: 'Отдатчик, модель 2',
            price: 10000,
            content: 'Крутой отдатчик',
            imgUrl: '/img/InfoCardsList/recoilModels/model2/1.jpg',
            idCardTitle: 1,
            idItem: 2
        },
        {
            name: 'Отдатчик, модель 3',
            price: 10000,
            content: 'Крутой отдатчик',
            imgUrl: '/img/InfoCardsList/recoilModels/model3/1.jpg',
            idCardTitle: 1,
            idItem: 3
        },
        {
            name: 'Приемник, модель 1',
            price: 10000,
            content: 'Крутой Приемник',
            imgUrl: '/img/InfoCardsList/recoilModels/model1/1.jpg',
            idCardTitle: 7,
            idItem: 1
        },
        {
            name: 'Приемник, модель 2',
            price: 10000,
            content: 'Крутой отдатчик',
            imgUrl: '/img/InfoCardsList/recoilModels/model2/1.jpg',
            idCardTitle: 7,
            idItem: 2
        },
        {
            name: 'Приемник, модель 3',
            price: 10000,
            content: 'Крутой отдатчик',
            imgUrl: '/img/InfoCardsList/recoilModels/model3/1.jpg',
            idCardTitle: 7,
            idItem: 3
        },
        {
            name: 'Тяга, модель 1',
            price: 10000,
            content: 'Крутая тяга',
            imgUrl: '/img/InfoCardsList/thrustModels/model1/1.jpg',
            idCardTitle: 3,
            idItem: 1
        },
        {
            name: 'Тяга, модель 1',
            price: 10000,
            content: 'Крутая тяга',
            imgUrl: '/img/InfoCardsList/thrustModels/model1/1.jpg',
            idCardTitle: 6,
            idItem: 1
        },
        {
            name: 'Экструзионная головка',
            price: 10000,
            content: 'Модель экструзионных головок',
            imgUrl: '/img/InfoCardsList/extrusionHeadsModels/model1/1.jpg',
            idCardTitle: 4,
            idItem: 1
        },
    ];

    return (
        <div className={` d-flex ${styles.wrapper}`}>
            <div>
                <div className={styles.wrapperListCardDrawer}>
                    <div className={styles.header}>Разновидности элемента 'Наименование элемента'</div>
                    <div className={`d-flex flex-column flex-wrap ${styles.gap12px}`}>
                        {arrayHeaderModels.filter((obj) => obj.idCardTitle == props.elemClick).map((obj) => (
                            <InfoCardConstructor
                                key = {obj.id}
                                name={obj.name}
                                price={obj.price}
                                content={obj.content}
                                imgUrl={obj.imgUrl}/>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <OptionsListConstructor idCardTitle = {props.elemClick}
                                        changeCardStatusById = {props.changeCardColor}
                />
            </div>
        </div>
    );
}

export default InfoCardsListConstructor;
