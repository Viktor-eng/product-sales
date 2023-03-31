import styles from './InfoCardConstructor.module.scss'

function InfoCardConstructor(props) {
    return (
        <div className={styles.wrapper}>
            <div className="d-flex flex-column justify-center" onClick={props.onClick}>
                <img className={`cu-p ${styles.wrapperImg}`} width={268} height={158} src={props.imgUrl}
                     alt="Фотография карточки"/>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.content}>{props.content}</div>
                <div className={styles.price}>Цена:{props.price}</div>
            </div>
        </div>
    );
}

export default InfoCardConstructor;
