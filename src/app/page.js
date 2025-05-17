import Card from "@/components/card/Card";
import { IconTypes } from "@/components/button/Button";

const Home = () => {
  return (
    <div className="container pb-80">
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
