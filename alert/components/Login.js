import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Text } from "react-native-elements";

export default function Login() {
  const [user, onChangeUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Text h3 style={styles.titles}>
        Envía una alerta
      </Text>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(user) => onChangeUser(user)}
          value={user}
          placeholder="Usuario"
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(password) => setPassword(password)}
          value={password}
          placeholder="Password"
        />
      </View>
      
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
