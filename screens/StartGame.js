import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export default function StartGame() {
  return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Start A New Game !</Text>
          <View style={styles.inputContainer}>
              <Text>Select A Number</Text>
              <TextInput />
              <View style={styles.buttonContainer}>
                  <Button title="Reset"/>
                  <Button title="Cancle"/>
              </View>
          </View>
        </View>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 10,
    alignItems:'center'
  },
  title:{
    fontSize:20,
    marginVertical:10,
    alignSelf:'center'
  },
  inputContainer:{
    width:300,
    maxWidth:'80%',
    alignItems:'center',
    shadowColor:'black',
    shadowOffset:{width:0,height:2},
    shadowRadius:6,
    shadowOpacity:0.26,
    elevation:5,
    backgroundColor:'white', 
    padding:20,
    borderRadius:10
  },
  buttonContainer:{
      flexDirection:'row',
      width:'100%',
      paddingHorizontal:15,
      justifyContent:'space-between'
  }
});
