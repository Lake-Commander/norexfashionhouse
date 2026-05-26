import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cloth from "./Cloth";
import HandBag from "./HandBag";
import Sandals from "./Sandals";

const Products = () => {
  return (
    <div className="border-0 mt-5">
      <Tabs>
        <TabList>
          <Tab> Cloth</Tab>
          <Tab> Hand Bags</Tab>
          <Tab> Sandals</Tab>
        </TabList>

        <TabPanel>
          <div>
            <Cloth />
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <HandBag />
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <Sandals />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Products;
