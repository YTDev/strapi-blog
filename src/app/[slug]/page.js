import getCategoryColor from "@/helpers/categoryColors.js";
import Image from "next/image";
import styles from "./style.module.sass";
import config from "@/config";
import fetchBlogs from "@/helpers/fetch-blogs";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
const BlogDetails = async (props) => {
  const blogs = await fetchBlogs(`filters[slug][$eq]=${props.params.slug}`);

  if (blogs.data.length === 0) {
    return null;
  }
  const blog = blogs.data[0];

  console.log(blog);
  return (
    <div className="container pb-80">
      <div className="row">
        <div className="col col_9">
          <div className={`h6 mb-20 c-${getCategoryColor(blog.Category)}`}>
            {blog.Category}
          </div>
          <h2 className="">{blog.title}</h2>
        </div>
      </div>
      <Image
        className={`${styles.featuredImage} mb-50`}
        src={`${config.api}${blog.FeaturedImage?.url}`}
        alt="Featured Article"
        width="1280"
        height="387"
      />

      <div className="row">
        <div className="col col_9">
          <BlocksRenderer content={blog.Content} />
        </div>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  const blogs = await fetchBlogs();

  return blogs.data.map((blog) => ({
    slug: blog.slug,
  }));
}

export default BlogDetails;
