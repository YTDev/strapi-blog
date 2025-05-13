import styles from "./Card.module.sass";
import Image from "next/image";
const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card_imageWrap}>
        <div className={styles.card_image}>
          <Image
            src="/thumb-featured-article.jpg"
            alt="hero"
            fill={true}
            className={styles.card_image}
          />
        </div>
      </div>
      <div className={styles.card_content}>
        <div className={`${styles.card_label} h6 mb-10 c-orange`}>
          Product Reviews
        </div>
        <div className={"${styles.card_title} h3 mb-20"}>
          Lorem ipsum dolor sit amet, consectetur.
        </div>
        <p className={styles.card_summary}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          efficitur, nunc ut bibendum facilisis, nisi nisl aliquet nunc, eget
          tincidunt nisi nisl eget nunc.
        </p>
      </div>
    </div>
  );
};

export default Card;
