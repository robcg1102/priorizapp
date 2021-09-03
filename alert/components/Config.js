import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Switch, Badge } from "react-native-elements";
import Slider from "react-native-slider";

import { AppContext } from "../Context";

export default function Config() {

  const {state, setState} = useContext(AppContext);

  const [vibration, setVibration] = useState(0.5);
  const [sound, setSound] = useState(0.5);
  
  const changeTheme = () => {
    setState({themeDark: !state.themeDark});
  };

  const styleBack = () => {
    if(state.themeDark){
      return {
        backgroundColor: "#000",
        flex: 1
      }
    }else{
      return {
        backgroundColor: "white",
        flex: 1
      }
    }
  }

  const styleTitle = () => {
    if(state.themeDark){
      return {
        marginVertical: 20,
        marginHorizontal: 20,
        color: 'gray'
      }
    }else{
      return {
        marginVertical: 20,
        marginHorizontal: 20,
        color: 'black'
      }
    }
  }

  const bodyText = () => {
    if(state.themeDark){
      return   {
        fontSize: 25,
        color: 'gray'
      }
    }else {
      return {
        fontSize: 25,
        color: 'black'
      }
    }
  }

  const maxMinText = () => {
    if(state.themeDark){
      return   {
        color: 'gray'
      }
    }else {
      return {
        color: 'black'
      }
    }
  }

  return (
    <View style={styleBack()}>
      <Text h2 style={styleTitle()}>
        Configuraciones
      </Text>
      <Text h4 style={styleTitle()}>
        Tema
      </Text>
      <View style={styles.center}>
        <Text>
          {!state.themeDark ? (
            <Text style={bodyText()}>Claro</Text>
          ) : (
            <Text style={bodyText()}>Oscuro</Text>
          )}{" "}
        </Text>
        <Switch value={state.themeDark} onChange={changeTheme} />
      </View>
      <Text h4 style={styleTitle()}>
        Vibración
      </Text>
      <View style={styles.sliderStyle}>
        <Slider value={vibration} onValueChange={setVibration} />
        <View style={styles.sliderText}>
          <Text style={maxMinText()}>Min</Text>
          <Text style={maxMinText()}>Max</Text>
        </View>
      </View>
      <Text h4 style={styleTitle()}>
        Sonido
      </Text>
      <View style={styles.sliderStyle}>
        <Slider value={sound} onValueChange={setSound} />
        <View style={styles.sliderText}>
          <Text style={maxMinText()}>Min</Text>
          <Text style={maxMinText()}>Max</Text>
        </View>
      </View>
      <Text h4 style={styleTitle()}>
        Color Semáforo de alertas
      </Text>
      <View h4 style={styles.center}>
        <Text style={bodyText()}>Mínima</Text>
        <Badge status="success" value={"   "} />
      </View>
      <View style={styles.center}>
        <Text style={bodyText()}>Media</Text>
        <Badge status="warning" value={"   "} />
      </View>
      <View h4 style={styles.center}>
        <Text style={bodyText()}>Máxima</Text>
        <Badge status="error" value={"   "} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 40,
    flexDirection: "row",
    marginVertical: 5,
  },
  sliderStyle: {
    marginHorizontal: 45,
  },
  sliderText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
