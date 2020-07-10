import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: "#f7287b",
    alignItems: "center",
    justifyContent:"center"
  },
  headerText: {
    fontSize: 22,
    color:'black'
  },
});
