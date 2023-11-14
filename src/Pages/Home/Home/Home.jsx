import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommended from "../ChefRecommended/ChefRecommended";
import Featured from "../Featured/Featured";
import FromOurMenu from "../FromOurMenu/FromOurMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <BistroBoss></BistroBoss>
      <FromOurMenu></FromOurMenu>
      <CallUs></CallUs>
      <ChefRecommended></ChefRecommended>
      <Featured></Featured>
    </div>
  );
};

export default Home;
