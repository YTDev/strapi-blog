import Card from "@/components/card/Card";

const Home = () => {
  return (
    <div className="container pb-80">
      <Card />
      <div className="row">
        <div className="col col_4">
          <Card />
        </div>
        <div className="col col_4">
          <Card />
        </div>
        <div className="col col_4">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
