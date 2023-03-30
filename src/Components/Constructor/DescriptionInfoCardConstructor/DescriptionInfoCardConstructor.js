import styles from './DescriptionInfoCardConstructor.module.scss'

function DescriptionInfoCardConstructor(props) {
    return (
        <div className={`d-flex ${styles.wrapper}`}>
            <div className={styles.wrapperModel}>
                <div className={styles.header}>Модель №</div>
                <div className={styles.typeModel}>Тип модели : Наименование</div>
                <div className={styles.price}>Цена: сумма рублей</div>
            </div>
            <div className={styles.wrapperDescription}>
                <div className={styles.headerDescription}>Описание:</div>
                <div className={styles.description}> Описание модели описание модели описание модели описание модели описание
                    модели описание модели описание модели описание модели описание модели описание модели
                    описание модели описание модели описание модели описание модели описание модели описание
                    модели описание модели
                </div>
            </div>
        </div>
    );
}

export default DescriptionInfoCardConstructor;
