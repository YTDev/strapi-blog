import getCategoryColor from "@/helpers/categoryColors.js";
import Image from "next/image";
import styles from "./style.module.sass";
const BlogDetails = () => {
  return (
    <div className="container pb-80">
      <div className="row">
        <div className="col col_9">
          <div className={`h6 mb-20 c-${getCategoryColor("Product Reviews")}`}>
            Product Reviews
          </div>
          <h2 className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          </h2>
        </div>
      </div>
      <Image
        className={`${styles.featuredImage} mb-50`}
        src="/thumb-featured-article.jpg"
        alt="Featured Article"
        width="1280"
        height="387"
      />

      <div className="row">
        <div className="col col_9">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            voluptatum. Quae, consequatur. Quos, voluptatum. Quae, consequatur.
            Quos, voluptatum. Quae, consequatur. Quos, voluptatum. Quae,
            consequatur. Quos, voluptatum. Quae, consequatur. Quos, voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            voluptatum. Quae, consequatur. Quos, voluptatum. Quae, consequatur.
            Quos, voluptatum. Quae, consequatur. Quos, voluptatum. Quae,
            consequatur. Quos, voluptatum. Quae, consequatur. Quos, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            voluptatum. Quae, consequatur. Quos, voluptatum. Quae, consequatur.
            Quos, voluptatum. Quae, consequatur. Quos, voluptatum. Quae,
            consequatur. Quos, voluptatum. Quae, consequatur. Quos, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            voluptatum. Quae, consequatur. Quos, voluptatum. Quae, consequatur.
            Quos, voluptatum. Quae, consequatur. Quos, voluptatum. Quae,
            consequatur. Quos, voluptatum. Quae, consequatur. Quos, voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            voluptatum. Quae, consequatur. Quos, voluptatum. Quae, consequatur.
            Quos, voluptatum. Quae, consequatur. Quos, voluptatum. Quae,
            consequatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
