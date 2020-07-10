import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Header=(props)=> {
  return (
    <View style={styles.headerContainer}>
      <View >
  <Text style={styles.headerText}>{props.title}</Text>
      </View>
    </View>
  );
}
export default Header;
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
