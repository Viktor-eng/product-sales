import styles from './Contact.module.scss'

function Contact() {
    return (
        <div className={`d-flex ${styles.page}`}>
            <div>
                <div className={`d-flex flex-column ${styles.contact}`}>
                    <div className={styles.header}>Контакты</div>
                    <div className={styles.childHeader}>
                        <div className="d-flex">
                            <div className={` ${styles.marginRight205px} ${styles.marginButton12px}`}>Контактный номер
                            </div>
                            <div>Почта</div>
                        </div>
                        <div className={`d-flex ${styles.weight500}`}>
                            <div className={styles.marginRight210px}>+7 (3822) 49-89-89</div>
                            <div className="cu-p">calble@tomskcable.ru</div>
                        </div>
                        <div className={`${styles.marginTop24px} ${styles.marginButton12px}`}>Головной офис</div>
                        <div className={styles.weight500}>г. Томск, ул. Смирнова 3</div>
                    </div>
                </div>
            </div>
            <div className={styles.map} style={{position:"relative", overflow: "hidden"}}><a
                href="https://yandex.ru/maps/org/ooo_tomskiy_kabelny_zavod/1167283128/?utm_medium=mapframe&utm_source=maps"
                style={{color: "#eee", fontSize: "12px", position: "absolute", top:"0px"}}>ООО Томский кабельный завод</a><a
                href="https://yandex.ru/maps/67/tomsk/category/cables_and_wires/184107032/?utm_medium=mapframe&utm_source=maps"
                style={{color: "#eee", fontSize:"12px", position: "absolute", top: "14px"}}>Кабель и провод в Томске</a><a
                href="https://yandex.ru/maps/67/tomsk/category/cement/184107765/?utm_medium=mapframe&utm_source=maps"
                style={{color: "#eee", fontSize: "12px", position: "absolute", top: "28px"}}>Цемент в Томске</a>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=84.990790%2C56.524788&mode=poi&poi%5Bpoint%5D=84.990433%2C56.525304&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1167283128&z=16.61"
                    width="760" height="288" frameBorder="1" allowFullScreen="true" style={{position: "relative", border: "none"}}></iframe>
            </div>
            {/*<div className={styles.map}>*/}
            {/*    <img width={760} height={288} src="/img/Contact/map.svg" alt="Карта"/>*/}
            {/*</div>*/}
        </div>
    );
}

export default Contact;
