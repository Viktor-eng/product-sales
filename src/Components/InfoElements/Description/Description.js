import styles from './Description.module.scss'

function Description(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>Модель №</div>
            <div className={styles.headerDescription}>Описание</div>
            <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda
                at beatae cumque cupiditate
                dolor, doloribus eum excepturi facilis fugiat id illo laborum nesciunt optio perferendis quibusdam quos
                rerum veritatis!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorem eligendi minus pariatur
                quaerat, quos saepe sed, sit tempore ullam vitae voluptatum. Alias aperiam asperiores aut impedit, in
                laudantium reprehenderit?
            </div>
            <div className={styles.price}>Цена sum рублей</div>
            <div className="cu-p">
                <img width={440} height={48} src="/img/InfoCard/addInDrawer.svg" alt="Добавить в корзину"/>
            </div>
        </div>
    );
}

export default Description;
