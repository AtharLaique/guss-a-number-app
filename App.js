
import React,{useState} from 'react';
import { StyleSheet, Text, View ,Image } from 'react-native';
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
    <Image width="100" height="200" source={{uri:'https://i.picsum.photos/id/473/200/200.jpg?hmac=lXsJQxtsh73ygSCMmcWA-YqIpQ4FjdxUYkkuLTAPBfM'}}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});

