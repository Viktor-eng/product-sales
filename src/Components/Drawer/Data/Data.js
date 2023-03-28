import styles from './Data.module.scss';

function Data() {
    return (
        <div className={styles.wrapper}>
            <div className="d-flex"></div>
            <div className={styles.header}>Ваши данные</div>
            <input className={styles.content} type="text" placeholder="ФИО"/>
            <input className={styles.content} type="nameCompany" placeholder="Название компании"/>
            <input className={styles.content} type="phone" placeholder="Телефон"/>
            <input className={styles.content} type="Email" placeholder="Email"/>
            <textarea className={styles.textarea} name="Comment" placeholder="Комментарий"></textarea>
            <div><img className="cu-p" src="/img/Data/bt-formKP.svg" alt="Сформировать КП"/></div>
            <div className={styles.policy}>Нажимая "Сформировать КП" вы соглашаетесь с политикой конфиденциальности
                данного сайта
            </div>

        </div>
    );
}

export default Data;