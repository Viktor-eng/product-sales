import styles from './ModelPhotos.module.scss'
import {useParams} from "react-router-dom";

function ModelPhotos(props) {
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
            name: 'Экструзионные головки, модель 1',
            price: 10000,
            content: 'Крутая модель экструзионных головок',
            imgUrl: '/img/InfoCardsList/extrusionHeadsModels/model1/1.jpg',
            idCardTitle: 7,
            idItem: 1
        },
    ];

    const {id} = useParams()

    const photo = arrayHeaderModels.find(x => x.idCardTitle == id & x.idItem == props.itemClickId);

    return (
        <div className={styles.wrapper}>
            <img className={`${styles.wrapperImg}`} width={400} height={483} src={photo.imgUrl}
                 alt="Фотография карточки"/>
            <img className={styles.leftArrow} width={24} height={24} src="/img/InfoCard/leftArrow.svg"
                 alt="Левая стрелка"/>
            <img className={styles.rightArrow} width={24} height={24} src="/img/InfoCard/rightArrow.svg"
                 alt="Правая стрелка"/>

        </div>
    );
}

export default ModelPhotos;
