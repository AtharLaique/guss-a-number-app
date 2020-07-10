import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export default function StartGame() {
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Start A New Game !</Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text>Select A Number</Text>
        <TextInput placeholder="Enter a Number" />
      </View>
      <View style={styles.button}>
        <Button title="Reset" />
        <Button title="Cancle" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 20,
  },
  textInput: {},
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
