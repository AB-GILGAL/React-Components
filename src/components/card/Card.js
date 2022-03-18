import  styles from "./Card.module.css"

const Card = () => {
    return (
        <div
            className={styles.card}>
                <img src="./images/images (2.)jpg"
                alt=""
                className={styles.card__image}/>
                <h3 className={styles.Card__title}>Lorem, ipsum.</h3>
                <p className={styles.card__desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet odit iusto error consectetur blanditiis nostrum ad officiis cupiditate, tenetur quaerat a officia deleniti illo porro velit alias nulla. Ex!
                Omnis dolores illum, accusantium dolore quasi provident molestiae? Modi iste, eum eius aperiam repellat reiciendis nesciunt possimus ab dignissimos vitae asperiores, quaerat delectus. Odit, blanditiis obcaecati. Dolorem voluptatem ipsum aut!</p>
                <button className={styles.card__button}>Add to cart</button>
    </div>
    );
};
export default Card;