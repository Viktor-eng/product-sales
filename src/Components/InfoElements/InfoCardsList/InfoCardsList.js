import styles from './InfoCardsList.module.scss'
import InfoCard from "../InfoCard/InfoCard";
import ModelPhotos from "../ModelPhotos/ModelPhotos";
import Description from "../Description/Description";
import OptionsList from "../OptionsList/OptionsList";
import {useParams} from "react-router-dom";
import {useState} from "react";

function InfoCardsList() {
    const {id} = useParams()

    const [itemClickId, setItemClickId] = useState(1)

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

    const obj = arrayHeaderModels.find((obj) => obj.idCardTitle == id);

    return (
        <div className={` d-flex ${styles.wrapper}`}>
            <div className={styles.wrapper}>
                <div className={styles.wrapperListCardDrawer}>
                    <div className={styles.header}>Разновидности элемента</div>
                    <div className={`d-flex flex-column flex-wrap ${styles.gap12px}`}>
                        {arrayHeaderModels.filter((obj) => obj.idCardTitle == id).map((obj) => (
                            <InfoCard
                                name={obj.name}
                                price={obj.price}
                                content={obj.content}
                                imgUrl={obj.imgUrl}
                                onClick={() => setItemClickId(obj.idItem)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <div className={`d-flex ${styles.gap32px}`}>
                    <div>
                        <ModelPhotos itemClickId={itemClickId}/>
                    </div>
                    <div>
                        <Description/>
                    </div>
                </div>
                <div>
                    <OptionsList/>
                </div>
            </div>
        </div>
    );
}

export default InfoCardsList;