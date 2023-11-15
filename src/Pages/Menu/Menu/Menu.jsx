import SectionCover from "../../Shared/SectionCover/SectionCover";
import menuImage from "../../../assets/menu/banner3.jpg";
import { Helmet } from "react-helmet-async";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <SectionCover
        heading={"our menu"}
        fontSize={"88px"}
        img={menuImage}
        phrase={"WOULD YOU LIKE TO TRY A DISH?"}
      ></SectionCover>
      <MenuCategory></MenuCategory>
    </div>
  );
};

export default Menu;
