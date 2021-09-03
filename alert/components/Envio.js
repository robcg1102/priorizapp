import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Text } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";

export default function Envio() {
  const [sms, onChangeSMS] = React.useState("");
  const [alert, setAlert] = React.useState("");

  return (
    <View style={styles.container}>
      <Text h3 style={styles.titles}>
        Envía una alerta
      </Text>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(sms) => onChangeSMS(sms)}
          value={sms}
          placeholder="Escribe tu SMS"
        />
      </View>
      <RNPickerSelect
        placeholder={{ label: "Nivel de alerta", value: "" }}
        onValueChange={(alert) => {setAlert(alert)
        console.log(alert)
        }}
        items={[
          { label: "PRIOMIN", value: "PRIOMIN"},
          { label: "PRIOMED", value: "PRIOMED"},
          { label: "PRIOMAX", value: "PRIOMAX"},
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 50,
  },
  titles: {
    marginVertical: 12,
    marginHorizontal: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
