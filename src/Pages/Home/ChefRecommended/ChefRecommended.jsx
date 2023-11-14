import image1 from "../../../assets/home/slide1.jpg";
import MainButton from "../../../components/MainButton/MainButton";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ChefRecommended = () => {
  return (
    <div className="mt-10 mb-20">
      <SectionTitle
        heading="CHEF RECOMMENDS"
        subHeading="Should Try"
      ></SectionTitle>
      <div className="grid grid-cols-3 px-4 gap-5 pt-7">
        <div className=" bg-[#F3F3F3]">
          <figure>
            <img className="w-full h-[300px]" src={image1} alt="Shoes" />
          </figure>
          <div className="text-center space-y-4 mt-5 py-7">
            <h2 className="text-center text-2xl font-bold">Caeser Salad</h2>
            <p className="w-1/2 mx-auto">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center pt-4">
              <MainButton
                name="add to cart"
                mainColor="#BB8506"
                secondaryColor="#1F2937"
                tertiaryColor="#E8E8E8"
              ></MainButton>
            </div>
          </div>
        </div>
        <div className=" bg-[#F3F3F3]">
          <figure>
            <img className="w-full h-[300px]" src={image1} alt="Shoes" />
          </figure>
          <div className="text-center space-y-4 mt-5 py-5">
            <h2 className="text-center text-2xl font-bold">Caeser Salad</h2>
            <p className="w-1/2 mx-auto">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center pt-4 font-semibold">
              <MainButton
                name="add to cart"
                mainColor="#BB8506"
                secondaryColor="#1F2937"
                tertiaryColor="#E8E8E8"
              ></MainButton>
            </div>
          </div>
        </div>
        <div className=" bg-[#F3F3F3]">
          <figure>
            <img className="w-full h-[300px]" src={image1} alt="Shoes" />
          </figure>
          <div className="text-center space-y-4 mt-5 py-5">
            <h2 className="text-center text-2xl font-bold">Caeser Salad</h2>
            <p className="w-1/2 mx-auto">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center pt-4">
              <MainButton
                name="add to cart"
                mainColor="#BB8506"
                secondaryColor="#1F2937"
                tertiaryColor="#E8E8E8"
              ></MainButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommended;
