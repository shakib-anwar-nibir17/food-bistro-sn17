import SectionCover from "../../Shared/SectionCover/SectionCover";
import shopImg from "../../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import "./shop.css";
import useMenu from "../../../Hooks/useMenu";

import OrderTab from "../OrderTab/OrderTab";

const Shop = () => {
  const [menu] = useMenu();
  const drinks = menu.filter((item) => item.category === "drinks");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>
      <SectionCover
        img={shopImg}
        heading="OUR SHOP"
        phrase="Would you like to try a dish?"
        fontSize="88px"
      ></SectionCover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <div className="flex justify-center mt-10">
            <Tab>PIZZA</Tab>
            <Tab>SALADS</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERT</Tab>
            <Tab>DRINKS</Tab>
          </div>
        </TabList>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
