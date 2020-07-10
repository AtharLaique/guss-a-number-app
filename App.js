import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//Custome component
import Header from './components/header/Header';
import StartGame from './screens/StartGame';

export default function App() {
  return (
    <View style={styles.container}>
     <Header title="Guess A Number"/>
     <StartGame/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});

