import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
//Custome Component
import Card from "../components/Card";
import Input from "../components/Input";
import color from "../constants/color";

export default function StartGame() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Start A New Game !</Text>
        <Card style={styles.inputContainer}>
          <Text>Select A Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="decimal-pad"
            maxLength={2}
          />
          <View style={styles.buttonContainer}>
            <Button title="Reset" color={color.accent} />
            <Button title="Cancle" color={color.primary} />
          </View>
        </Card>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    alignSelf: "center",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
});
