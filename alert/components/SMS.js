import React, { useContext, useEffect} from "react";
import { FlatList, View } from "react-native";
import { PricingCard } from "react-native-elements";
import { AppContext } from "../Context";

export default function SMS() {

  const {state, setState} = useContext(AppContext);
  
  useEffect(() => {
    console.log("Aquí se hace petición al back para recibir SMS");
  }, [])


  const DATA = [
    {
      color: "#00a03e",
      tipo: "Mínima",
    },
    {
      color: "#dd0a35",
      tipo: "Máxima",
    },
    {
      color: "#ffb549",
      tipo: "Media",
    },
  ];

  const styleBack = () => {
    if(state.themeDark){
      return {
        backgroundColor: "#000",
        flex: 1
      }
    }else{
      return {
        backgroundColor: "#aaa",
        flex: 1
      }
    }
  }

  const renderItem = ({ item }) => (
    <PricingCard
      color={item.color}
      title="Alerta"
      price={item.tipo}
      info={[
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, illum?",
      ]}
      button={{ title: "Leer" }}
    />
  );

  return (
    <View style={styleBack()}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item=>item.color}/>
    </View>
  );
}
