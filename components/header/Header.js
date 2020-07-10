import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View >
        <Text style={styles.headerText}>Guess A Number</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
 headerContainer:{
    padding:40,
    backgroundColor:'pink',
    alignItems:'center'
 },
  headerText: {
    fontSize:25
  },
});
