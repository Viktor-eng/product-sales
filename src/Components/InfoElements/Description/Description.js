import styles from './Description.module.scss'

function Description(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>Модель №</div>
            <div className={styles.headerDescription}>Описание:</div>
            <div className={styles.description}>Описание модели описание модели описание модели описание модели описание
                модели описание модели описание модели описание модели описание модели описание модели
                описание модели описание модели описание модели описание модели описание модели описание
                модели описание модели
            </div>
            <div className={styles.price}>Цена сумма рублей</div>
            <div className="cu-p">
                <img width={440} height={48} src="/img/InfoCard/addInDrawer.svg" alt="Добавить в корзину"/>
            </div>
        </div>
    );
}

export default Description;
