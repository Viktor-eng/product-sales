import styles from './ListCards.module.scss'
import ConstructorInTitle from "../ConstructorInTitle/ConstructorInTitle";
import Card from "../Card/Card";
import {Link} from "react-router-dom";

function ListCards(props) {

    const arrayCards = [
        {
            name: 'Ванны',
            imgUrl: '/img/CardTitle/bath.jpg',
            id: 1
        },
        {
            name: 'Компенсаторы',
            imgUrl: '/img/CardTitle/сompensator.jpg',
            id: 2
        },
        {
            name: 'Лентообмотки',
            imgUrl: '/img/CardTitle/tapeWindings.jpg',
            id: 3
        },
        {
            name: 'Отдатчики',
            imgUrl: '/img/CardTitle/recoil.jpg',
            id: 4
        },
        {
            name: 'Порталы',
            imgUrl: '/img/CardTitle/portal.jpg',
            id: 5
        },
        {
            name: 'Тяги',
            imgUrl: '/img/CardTitle/thrust.jpg',
            id: 6
        },
        {
            name: 'Экструзионные головки',
            imgUrl: '/img/CardTitle/extrusionHeads.jpg',
            id: 7
        }
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.catalog}>Каталог</div>
            <div className={`d-flex flex-wrap ${styles.gap32px}`}>
                <ConstructorInTitle/>
                 {arrayCards.map((obj) => (
                     <Link to={`/infoCard/${obj.id}`}><Card
                         id ={obj.id}
                         name={obj.name}
                         imgUrl={obj.imgUrl}/></Link>
                ))}
            </div>
        </div>
    );
}

export default ListCards;