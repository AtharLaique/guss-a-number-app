
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
//Custome component
import Header from './components/header/Header';
import StartGame from './screens/StartGame';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber]=useState()
  const startGameHandler=(number)=>{
    setUserNumber(number)
  }
  let content= <StartGame startGame={startGameHandler}/>;
  if(userNumber)
  {
    content=< GameScreen userChoice={userNumber}/>
  }
  return (
    <View style={styles.container}>
     <Header title="Guess A Number"/>
    {content}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});

