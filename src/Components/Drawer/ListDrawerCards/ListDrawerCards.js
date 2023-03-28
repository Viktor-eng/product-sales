import styles from './ListDrawerCards.module.scss';
import CardDrawer from "../CardDrawer/CardDrawer";
import Data from "../Data/Data";

function ListDrawerCards() {
    const arrayCardsByIdElement = [
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
            content: 'Крутая модель экструзионных головок',
            imgUrl: '/img/InfoCardsList/extrusionHeadsModels/model1/1.jpg',
            idCardTitle: 7,
            idItem: 1
        },
    ];

    return (
        <div>
            <div className={styles.drawer}>Корзина</div>
            <div className={`d-flex ${styles.headerWrapper}`}>
                <div className={styles.wrapper}>
                    <div className={`d-flex ${styles.wrapperCheckboxAndAddAll}`}>
                        <div className={`d-flex ${styles.wrapperAddOrDeleteALl}`}>
                            <div className="cu-p"><img src="/img/ListDrawerCards/checkbox.svg" alt="Галочка"/></div>
                            <div className="cu-p">Выбрать все</div>
                        </div>
                        <div className={styles.textDeleteAll}>Удалить выбранное</div>
                    </div>
                    <div className={`d-flex flex-column ${styles.wrapperCardDrawerList} ${styles.gap12px}`}>
                        {arrayCardsByIdElement.map((obj) => (
                            <CardDrawer
                                category={obj.category}
                                name={obj.name}
                                price={obj.price}
                                imgUrl={obj.imgUrl}/>
                        ))}
                    </div>
                </div>
                <Data/>
            </div>
        </div>
    );
}

export default ListDrawerCards;