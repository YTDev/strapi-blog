import Card from "@/components/card/Card";
import { IconTypes } from "@/components/button/Button";
import config from "@/config";
import fetchBlogs from "@/helpers/fetch-blogs";

const Home = async () => {
  const [featuredBlogs, blogs] = await Promise.all([
    fetchBlogs("filters[IsFeatured][$eq]=true"),
    fetchBlogs("filters[IsFeatured][$eq]=false"),
  ]);
  // console.log("featuredBlogs.data", featuredBlogs.data);

  return (
    <div className="container pb-80">
      {featuredBlogs.data.map((featuredBlog) => (
        <Card
          imgSrc={`${config.api}${featuredBlog.FeaturedImage?.url}`}
          imgAlt="Featured img"
          label={featuredBlog.Category}
          title={featuredBlog.Title}
          summary={featuredBlog.Summary}
          href={`/${featuredBlog.slug}`}
          btnIcon={IconTypes.ARROW_RIGHT}
          className="mb-30"
          key={featuredBlog.id}
        />
      ))}

      <div className="row">
        {blogs.data.map((blog) => (
          <div className="col col_4 m-mw-100" key={blog.id}>
            <Card
              imgSrc={`${config.api}${blog.Thumbnail?.url}`}
              imgAlt="Featured img"
              label={blog.Category}
              title={blog.Title}
              summary={blog.Summary}
              href={`/${blog.slug}`}
              btnIcon={IconTypes.ARROW_RIGHT}
              className="mb-30"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
