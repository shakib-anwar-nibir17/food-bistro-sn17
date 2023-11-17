import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCard from "../../Shared/MenuCard/MenuCard";
import MainButton from "../../../components/MainButton/MainButton";
import useMenu from "../../../Hooks/useMenu";

const FromOurMenu = () => {
  const [menu] = useMenu();

  const popularItem = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-20">
      <SectionTitle
        heading="FROM OUR MENU"
        subHeading="Check it out"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4 px-4">
        {popularItem.map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
      <div className="">
        <MainButton
          name={"View Full  Menu"}
          mainColor={"#1F2937"}
          secondaryColor={"#D99904"}
          tertiaryColor={"white"}
        ></MainButton>
      </div>
    </section>
  );
};

export default FromOurMenu;
