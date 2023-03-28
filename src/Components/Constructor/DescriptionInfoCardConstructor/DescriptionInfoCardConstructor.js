import styles from './DescriptionInfoCardConstructor.module.scss'

function DescriptionInfoCardConstructor(props) {
    return (
        <div className={`d-flex ${styles.wrapper}`}>
            <div className={styles.wrapperModel}>
                <div className={styles.header}>Модель №</div>
                <div className={styles.typeModel}>Тип модели : Content</div>
                <div className={styles.price}>Цена: sum рублей</div>
            </div>
            <div className={styles.wrapperDescription}>
                <div className={styles.headerDescription}>Описание</div>
                <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                    assumenda
                    at beatae cumque cupiditate
                    dolor, doloribus eum excepturi facilis fugiat id illo laborum nesciunt optio perferendis quibusdam
                    quos
                    rerum veritatis!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorem eligendi minus
                    pariatur
                    quaerat, quos saepe sed, sit tempore ullam vitae voluptatum. Alias aperiam asperiores aut impedit,
                    in
                    laudantium reprehenderit?
                </div>
            </div>
        </div>
    );
}

export default DescriptionInfoCardConstructor;
