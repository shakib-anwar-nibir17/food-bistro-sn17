import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuList from "../../Shared/MenuList/MenuList";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const MenuCategory = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");

  return (
    <div>
      <SectionTitle
        heading="TODAY'S OFFER"
        subHeading={"Don't miss"}
      ></SectionTitle>
      {/* todays offer */}
      <MenuList items={offered}></MenuList>
      {/* dessert  */}
      <MenuList
        items={dessert}
        title={"dessert"}
        phrase={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={dessertImg}
      ></MenuList>
      {/* pizza */}
      <MenuList
        items={pizza}
        title={"pizza"}
        phrase={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={pizzaImg}
      ></MenuList>
      {/* salad */}
      <MenuList
        items={salad}
        title={"salad"}
        phrase={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={saladImg}
      ></MenuList>
      {/* soup */}
      <MenuList
        items={soup}
        title={"soup"}
        phrase={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={soupImg}
      ></MenuList>
    </div>
  );
};

export default MenuCategory;
