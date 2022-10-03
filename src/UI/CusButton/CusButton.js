import styles from './CusButton.module.css';


const CusButton = (props) => {
    return(
        <button className={`${(props.cusCls) ? props.cusCls : ''} ${styles.customButton}`} type={props.cusType ? props.cusType : 'button'} onClick={props.cusClick}>{props.children}</button>
    )
}

export default CusButton;