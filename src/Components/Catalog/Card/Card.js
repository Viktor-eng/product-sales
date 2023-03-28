import styles from './Card.module.scss'

function Card(props) {

    return (
        <div className={`d-flex flex-column justify-center ${styles.wrapper}`}>
            <img className="cu-p" width={332} height={326} src={props.imgUrl} alt="Фотография карточки"/>
            <div className={styles.name}>{props.name}</div>
        </div>
    );
}

export default Card;
