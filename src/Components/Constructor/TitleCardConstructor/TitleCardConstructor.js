import styles from './TitleCardConstructor.module.scss'

function TitleCardConstructor(props) {
    console.log(props.isActive);
    return (

        <div className={`d-flex flex-column justify-center ${styles.wrapper}`} onClick={props.onClick}>
            <img className={props.isActive ? styles.imgActive : styles.imgNotActive}  width={134} height={102} src={props.imgUrl} alt="Фотография карточки"/>
            <div className={styles.name}>{props.name}</div>
        </div>
    );
}

export default TitleCardConstructor;
