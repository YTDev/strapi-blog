import Card from "@/components/card/Card";
import { IconTypes } from "@/components/button/Button";
import config from "@/config";
const fetchBlogs = async (params) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };
  const request = await fetch(
    `${config.api}/api/blogs?populate=*&${params}`,
    reqOptions
  );
  const response = await request.json();
  // console.log(`${config.api}/api/blogs?populate=*&${params}`);
  return response;
};

const Home = async () => {
  const [featuredBlogs, blogs] = await Promise.all([
    await fetchBlogs("filters[IsFeatured][$eq]=true"),
    await fetchBlogs("filters[IsFeatured][$eq]=false"),
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
        <div className="col col_4 m-mw-100">
          <Card
            label="Tech News"
            title="Lorem ipsum dolor sit amet, consectetur."
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            efficitur, nunc ut bibendum facilisis, nisi nisl aliquet nunc, eget
            tincidunt nisi nisl eget nunc."
            href="#"
            btnIcon={IconTypes.ARROW_RIGHT}
            className="mb-30"
          />
        </div>
        <div className="col col_4 m-mw-100">
          <Card
            label="Product Reviews"
            title="Lorem ipsum dolor sit amet, consectetur."
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            efficitur, nunc ut bibendum facilisis, nisi nisl aliquet nunc, eget
            tincidunt nisi nisl eget nunc."
            href="#"
            btnIcon={IconTypes.ARROW_RIGHT}
            className="mb-30"
          />
        </div>
        <div className="col col_4 m-mw-100">
          <Card
            label="Industry Insights"
            title="Lorem ipsum dolor sit amet, consectetur."
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            efficitur, nunc ut bibendum facilisis, nisi nisl aliquet nunc, eget
            tincidunt nisi nisl eget nunc."
            href="#"
            btnIcon={IconTypes.ARROW_RIGHT}
            className="mb-30"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
