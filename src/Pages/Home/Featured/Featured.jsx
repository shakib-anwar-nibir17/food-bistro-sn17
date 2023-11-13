import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <div className="feature-item  text-white  bg-cover bg-center bg-no-repeat mb-20">
      <div className="pt-8">
        <SectionTitle
          subHeading={"Check it out"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>
      </div>
      <div className="md:flex justify-center items-center pb-24 pt-20 px-24">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-20 space-y-3 text-lg font-medium">
          <h5>March 20, 2023</h5>
          <h1>WHERE CAN I GET SOME?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
