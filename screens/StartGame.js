import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
//Custome Component
import Card from "../components/Card";
import Input from "../components/Input";
import Confirmed from "../screens/Confirmed"
import color from "../constants/color";

export default function StartGame() {
  //State
  const [inputvalue, setInputValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");
  //Functions
  const onChangeText = (text) => {
    setInputValue(text.replace(/[^0-9]/g, ""));
  };
  const confirmInputHandler = () => {
    const value = parseInt(inputvalue);
    if (inputvalue == "" || value <= 0 || value > 99) {
      Alert.alert("Inavlid Number !", "Choose A Number Between 1 & 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    setConfirmed(true);
    setSelectedNumber(parseInt(inputvalue));
    setInputValue("");
  };
  const resetInputHandler = () => {
    setConfirmed(false);
    setInputValue("");
  };
  const startGame=()=>{
    console.log("Start Game")
  }
  
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
            value={inputvalue}
            onChangeText={onChangeText}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Reset"
              color={color.accent}
              onPress={resetInputHandler}
            />
            <Button
              title="Confirm"
              color={color.primary}
              onPress={confirmInputHandler}
            />
          </View>
        </Card>
        {confirmed == true ? (
          <Confirmed selectedNumber={selectedNumber} startGame={startGame}/>
        ) : null}
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
  }
});
