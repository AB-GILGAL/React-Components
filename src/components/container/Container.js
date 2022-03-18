import Card from "../card/Card";
import styles from "./Container.module.css";

const Container = () => {
    return (
        <div
            className={styles.container}>
                <Card/>
        </div>
    );
};
export default Container;