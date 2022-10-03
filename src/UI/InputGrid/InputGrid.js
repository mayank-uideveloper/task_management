import styles from "./InputGrid.module.css";

const InputGrid = (props) => {
    return (
        <>
            <div className={styles.inputGroup}>
                {props.label ? (
                    <div className={styles.label}>{props.label}</div>
                ) : null}
                <input
                    type={props.type ? props.type : "text"}
                    className={styles.input}
                    id={props.label.toLowerCase()}
                    name={props.label.toLowerCase()}
                    value={props.value}
                    onChange={props.onChange ? props.onChange : ''}
                    placeholder={props.placeholder ? props.placeholder : ''}
                    autoComplete={props.autoComplete ? props.autoComplete : 'off'}
                    {...props}
                />
            </div>
        </>
    );
};

export default InputGrid;
