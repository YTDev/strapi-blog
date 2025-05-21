import styles from "./Card.module.sass";
import Image from "next/image";
import Button, { IconTypes } from "../button/Button";
import ConditionalRenderer from "../ConditionalRenderer";
import getCategoryColor from "@/helpers/categoryColors";
const Card = (props) => {
  return (
    <div className={`${styles.card_wrap} ${props.className || ""}`}>
      <div className={styles.card}>
        <div className={styles.card_imageWrap}>
          <div className={styles.card_image}>
            <Image
              src={props.imgSrc}
              alt={props.imgAlt}
              fill={true}
              className={styles.card_image}
            />
          </div>
        </div>
        <div className={styles.card_content}>
          <ConditionalRenderer condition={props.label}>
            <div
              className={`${styles.card_label} h6 mb-10 c-${getCategoryColor(
                props.label
              )}`}
            >
              {props.label}
            </div>
          </ConditionalRenderer>
          <ConditionalRenderer condition={props.title}>
            <div className={"${styles.card_title} h3 mb-20"}>{props.title}</div>
          </ConditionalRenderer>
          <ConditionalRenderer condition={props.summary}>
            <p className={styles.card_summary}>{props.summary}</p>
          </ConditionalRenderer>
          <ConditionalRenderer condition={props.href}>
            <Button href={props.href} icon={props.btnIcon}>
              {props.btnLabel || "Read More"}
            </Button>
          </ConditionalRenderer>
        </div>
      </div>
    </div>
  );
};

export default Card;
