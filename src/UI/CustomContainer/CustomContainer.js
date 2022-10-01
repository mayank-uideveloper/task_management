import styles from "./CustomContainer.module.css";

const CustomContainer = (props) => {
    return (
        <section className="d-flex align-item-center justify-content-center">
            <div
                className={`${styles.cusContainer} ${
                    props.cusCls ? props.cusCls : ""
                }`}
            >
                {props.title ? <div className="">{props.title}</div> : null}

                {props.children}
            </div>
        </section>
    );
};

export default CustomContainer;
