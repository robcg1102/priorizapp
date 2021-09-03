import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { Text, Icon } from "react-native-elements";

export default function Guia() {
  return (
    <>
      <View styles={styles.container}>
        <Text h3 style={styles.titles}>
          Guía para usar la App
        </Text>
        <Image
          source={require("../assets/Images/Ejemplo.jpg")}
          style={{ width: 350, height: 300, marginLeft: 20 }}
        />
        <Text h3 style={styles.titles}>
          Códigos para alertas
        </Text>
        <Text style={styles.textBody}>
          Para mandar una alerta a tu contacto agrega el código adecuado dentro
          del cuerpo del SMS:
        </Text>
        <View style={styles.center}>
          <Text style={styles.textBody}>*Mínima</Text>
          <Text style={styles.textBody}>PRIOMIN</Text>
        </View>
        <View style={styles.center}>
          <Text style={styles.textBody}>*Media</Text>
          <Text style={styles.textBody}>PRIOMED</Text>
        </View>
        <View style={styles.center}>
          <Text style={styles.textBody}>*Máxima</Text>
          <Text style={styles.textBody}>PRIOMAX</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titles: {
    marginVertical: 12,
    marginHorizontal: 20,
  },
  textBody: {
    fontSize: 18,
    marginHorizontal: 25,
  },
  center: {
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    flexDirection: "row",
    marginVertical: 15,
  },
});
