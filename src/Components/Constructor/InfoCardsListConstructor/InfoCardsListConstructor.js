import styles from './InfoCardsListConstructor.module.scss'
import InfoCardConstructor from "../InfoCardConstructor/InfoCardConstructor";
import OptionsListConstructor from "../OptionsListConstructor/OptionsListConstructor";

function InfoCardsListConstructor({elemClick}) {

    const arrayHeaderModels = [
        {
            name: 'Ванна, модель 1',
            price: 10000,
            content: 'Крутая ванна',
            imgUrl: '/img/InfoCardsList/bathModels/model1/1.jpg',
            idCardTitle: 1,
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
            name: 'Лентообмотка, модель 1',
            price: 10000,
            content: 'Крутая лентообмотка',
            imgUrl: '/img/InfoCardsList/tapeWindingsModels/model1/1.jpg',
            idCardTitle: 3,
            idItem: 1
        },
        {
            name: 'Лентообмотка, модель 2',
            price: 10000,
            content: 'Крутая лентообмотка',
            imgUrl: '/img/InfoCardsList/tapeWindingsModels/model2/1.jpg',
            idCardTitle: 3,
            idItem: 2
        },
        {
            name: 'Отдатчик, модель 1',
            price: 10000,
            content: 'Крутой отдатчик',
            imgUrl: '/img/InfoCardsList/recoilModels/model1/1.jpg',
            idCardTitle: 4,
            idItem: 1
        },
        {
            name: 'Отдатчик, модель 2',
            price: 10000,
            content: 'Крутой отдатчик',
            imgUrl: '/img/InfoCardsList/recoilModels/model2/1.jpg',
            idCardTitle: 4,
            idItem: 2
        },
        {
            name: 'Отдатчик, модель 3',
            price: 10000,
            content: 'Крутой отдатчик',
            imgUrl: '/img/InfoCardsList/recoilModels/model3/1.jpg',
            idCardTitle: 4,
            idItem: 3
        },
        {
            name: 'Портал, модель 1',
            price: 10000,
            content: 'Крутой портал',
            imgUrl: '/img/InfoCardsList/portalModels/model1/1.jpg',
            idCardTitle: 5,
            idItem: 1
        },
        {
            name: 'Тяги, модель 1',
            price: 10000,
            content: 'Крутая тяга',
            imgUrl: '/img/InfoCardsList/thrustModels/model1/1.jpg',
            idCardTitle: 6,
            idItem: 1
        },
        {
            name: 'Экструзионные головки',
            price: 10000,
            content: 'Модель экструзионных головок',
            imgUrl: '/img/InfoCardsList/extrusionHeadsModels/model1/1.jpg',
            idCardTitle: 7,
            idItem: 1
        },
    ];

    return (
        <div className={` d-flex ${styles.wrapper}`}>
            <div>
                <div className={styles.wrapperListCardDrawer}>
                    <div className={styles.header}>Разновидности элемента Name</div>
                    <div className={`d-flex flex-column flex-wrap ${styles.gap12px}`}>
                        {arrayHeaderModels.filter((obj) => obj.idCardTitle == elemClick).map((obj) => (
                            <InfoCardConstructor
                                name={obj.name}
                                price={obj.price}
                                content={obj.content}
                                imgUrl={obj.imgUrl}/>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <OptionsListConstructor/>
            </div>
        </div>
    );
}

export default InfoCardsListConstructor;