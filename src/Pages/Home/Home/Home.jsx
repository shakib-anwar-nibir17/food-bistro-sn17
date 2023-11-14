import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommended from "../ChefRecommended/ChefRecommended";
import Featured from "../Featured/Featured";
import FromOurMenu from "../FromOurMenu/FromOurMenu";
import Testimonials from "../Testimonials/Testimonials";

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
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
