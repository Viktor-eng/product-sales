import styles from './OptionsListConstructor.module.scss'
import OptionsConstructor from "../OptionsConstructor/OptionsConstructor";
import DescriptionInfoCardConstructor from "../DescriptionInfoCardConstructor/DescriptionInfoCardConstructor";


function OptionsListConstructor(props) {
    const arrayOptions = [
        {
            price: 1000,
            options: 'Дополнительная опция',
            idCardTitle: 1,
            idCardInfo: 1,
            id: 1

        },
        {
            price: 1500,
            options: 'Дополнительная опция',
            idCardTitle: 1,
            idCardInfo: 1,
            id: 2
        },
        {
            price: 1500,
            options: 'Дополнительная опция',
            idCardTitle: 1,
            idCardInfo: 1,
            id: 3
        },
        {
            price: 1000,
            options: 'Дополнительная опция',
            idCardTitle: 1,
            idCardInfo: 2,
            id: 1

        },
        {
            price: 1500,
            options: 'Дополнительная опция',
            idCardTitle: 1,
            idCardInfo: 2,
            id: 2
        },
        {
            price: 1500,
            options: 'Дополнительная опция',
            idCardTitle: 1,
            idCardInfo: 3,
            id: 3
        },{
            price: 1000,
            options: 'Дополнительная опция',
            idCardTitle: 8,
            idCardInfo: 1,
            id: 1

        },
        {
            price: 1500,
            options: 'Дополнительная опция',
            idCardTitle: 8,
            idCardInfo: 1,
            id: 2
        },
        {
            price: 1500,
            options: 'Дополнительная опция',
            idCardTitle: 8,
            idCardInfo: 1,
            id: 3
        },
        {
            price: 1000,
            options: 'Дополнительная опция',
            idCardTitle: 8,
            idCardInfo: 2,
            id: 1

        },
        {
            price: 1500,
            options: 'Дополнительная опция',
            idCardTitle: 8,
            idCardInfo: 2,
            id: 2
        },
        {
            price: 1500,
            options: 'Дополнительная опция',
            idCardTitle: 8,
            idCardInfo: 3,
            id: 3
        },
        {
            price: 1000,
            options: 'Дополнительная опция',
            idCardTitle: 7,
            idCardInfo: 1,
            id: 1

        },
        {
            price: 1500,
            options: 'Дополнительная опция',
            idCardTitle: 7,
            idCardInfo: 1,
            id: 2
        },
        {
            price: 1500,
            options: 'Дополнительная опция',
            idCardTitle: 7,
            idCardInfo: 1,
            id: 3
        },
        {
            price: 1000,
            options: 'Дополнительная опция',
            idCardTitle: 7,
            idCardInfo: 2,
            id: 1

        },
        {
            price: 1500,
            options: 'Дополнительная опция',
            idCardTitle: 7,
            idCardInfo: 2,
            id: 2
        },
        {
            price: 1500,
            options: 'Дополнительная опция',
            idCardTitle: 7,
            idCardInfo: 3,
            id: 3
        },
        {
            price: 1000,
            options: 'Дополнительная опция',
            idCardTitle: 2,
            idCardInfo: 1,
            id: 1
        },
        {
            price: 1000,
            options: 'Дополнительная опция',
            idCardTitle: 2,
            idCardInfo: 2,
            id: 1
        },
        {
            price: 1500,
            options: 'Дополнительная опция',
            idCardTitle: 2,
            idCardInfo: 2,
            id: 2
        },
        {
            price: 1500,
            options: 'Дополнительная опция',
            idCardTitle: 2,
            idCardInfo: 2,
            id: 3
        },
        {
            price: 1500,
            options: 'Дополнительная опция',
            idCardTitle: 3,
            idCardInfo: 1,
            id: 1
        },
        {
            price: 1500,
            options: 'Дополнительная опция',
            idCardTitle: 3,
            idCardInfo: 1,
            id: 2
        },
        {
            price: 1000,
            options: 'Дополнительная опция',
            idCardTitle: 4,
            idCardInfo: 1,
            id: 1
        },
        {
            price: 1000,
            options: 'Дополнительная опция',
            idCardTitle: 4,
            idCardInfo: 1,
            id: 1
        },
        {
            price: 1000,
            options: 'Дополнительная опция',
            idCardTitle: 4,
            idCardInfo: 1,
            id: 1
        },
        {
            price: 1500,
            options: 'Дополнительная опция',
            idCardTitle: 5,
            idCardInfo: 1,
            id: 1
        },
        {
            price: 1500,
            options: 'Дополнительная опция',
            idCardTitle: 5,
            idCardInfo: 1,
            id: 2
        },
        {
            price: 1500,
            options: 'Дополнительная опция',
            idCardTitle: 6,
            idCardInfo: 1,
            id: 1
        },
        {
            price: 1500,
            options: 'Дополнительная опция',
            idCardTitle: 6,
            idCardInfo: 1,
            id: 2
        },
        {
            price: 1500,
            options: 'Дополнительная опция',
            idCardTitle: 6,
            idCardInfo: 1,
            id: 3
        },
    ];

    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.header}> {props.idCardTitle === 0 ? null : 'Дополнительные опции модели'}</div>
                <div><DescriptionInfoCardConstructor idCardTitle={props.idCardTitle}/></div>
                <div className={`${styles.optionsList}`}>
                    {arrayOptions.filter((obj) => obj.idCardTitle == props.idCardTitle & obj.idCardInfo == props.idCardInfo).map((obj) => (
                        <OptionsConstructor
                            idCardTitle={obj.idCardTitle}
                            idCardInfo={obj.idCardInfo}
                            options={obj.options}
                            price={obj.price}
                        />
                    ))}
                </div>
                {props.idCardTitle === 0 ? null : <div className={`cu-p ${styles.buttonAddInDrawer}`}>
                    <img onClick={() => props.changeCardStatusById(props.idCardTitle)} width={311} height={48}
                         src="/img/OptionsListConstructor/btn-addInDrawer.svg"
                         alt="Добавить в корзину"/>
                </div>}
            </div>
        </div>
    );
}

export default OptionsListConstructor;