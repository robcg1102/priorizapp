import React from "react";
import { Tab, TabView, Header, Icon } from "react-native-elements";
import Config from "./components/Config";
import Guia from "./components/Guia";
import SMS from "./components/SMS";
import Envio from "./components/Envio";

import MyProvider from "./Context";

export default function App() {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <MyProvider>
        <Header />
        <Tab value={index} onChange={setIndex} variant="primary">
          <Tab.Item
            title="guía"
            icon={
              <Icon
                size={20}
                color="white"
                name="youtube-play"
                type="font-awesome"
              />
            }
          />
          <Tab.Item
            title="SMS"
            icon={
              <Icon
                size={20}
                color="white"
                name="envelope"
                type="font-awesome"
              />
            }
          />
          <Tab.Item
            title="Envío"
            icon={
              <Icon
                size={20}
                color="white"
                name="share-square"
                type="font-awesome"
              />
            }
          />
          <Tab.Item
            title="conf"
            icon={
              <Icon
                size={20}
                color="white"
                name="cog"
                type="font-awesome"
              />
            }
          />
        </Tab>
        <TabView value={index} onChange={setIndex}>
          <TabView.Item style={{ width: "100%" }}>
            <Guia />
          </TabView.Item>
          <TabView.Item style={{ width: "100%" }}>
            <SMS />
          </TabView.Item>
          <TabView.Item style={{ width: "100%" }}>
            <Envio />
          </TabView.Item>
          <TabView.Item style={{ width: "100%" }}>
            <Config />
          </TabView.Item>
        </TabView>
      </MyProvider>
    </>
  );
}
