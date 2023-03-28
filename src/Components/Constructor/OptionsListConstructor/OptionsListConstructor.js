import styles from './OptionsListConstructor.module.scss'
import OptionsConstructor from "../OptionsConstructor/OptionsConstructor";
import DescriptionInfoCardConstructor from "../DescriptionInfoCardConstructor/DescriptionInfoCardConstructor";


function OptionsListConstructor(props) {
    const arrayOptions = [
        {
            price: 1000,
            options: 'Опция №1'
        },
        {
            price: 1500,
            options: 'Опция №2'
        },
        {
            price: 1500,
            options: 'Опция №3'
        },
        {
            price: 1000,
            options: 'Опция №4'
        },
        {
            price: 1500,
            options: 'Опция №5'
        },
        {
            price: 1500,
            options: 'Опция №6'
        },
        {
            price: 1000,
            options: 'Опция №7'
        },
        {
            price: 1500,
            options: 'Опция №8'
        },
        {
            price: 1500,
            options: 'Опция №9'
        },
        {
            price: 1000,
            options: 'Опция №10'
        },
        {
            price: 1500,
            options: 'Опция №11'
        },
        {
            price: 1500,
            options: 'Опция №12'
        },
    ];

    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.header}> Дополнительные опции модели</div>
                <div><DescriptionInfoCardConstructor/></div>
                <div className={`${styles.optionsList}`}>
                    {arrayOptions.map((obj) => (
                        <OptionsConstructor
                            options={obj.options}
                            price={obj.price}
                        />
                    ))}
                </div>
                <div className={`cu-p ${styles.buttonAddInDrawer}`}>
                    <img width={311} height={48} src="/img/OptionsListConstructor/btn-addInDrawer.svg"
                         alt="Добавить в корзину"/>
                </div>
            </div>

        </div>


    );
}

export default OptionsListConstructor;