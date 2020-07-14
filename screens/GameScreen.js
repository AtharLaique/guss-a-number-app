import React,{useState} from 'react';
import {Text, View , StyleSheet,Button} from 'react-native'
import Card from '../components/Card';
import color from '../constants/color';
const genrateRandomNumber = (min , max , exclude) =>{
    min=Math.ceil(min);
    max=Math.floor(max);
    const randNum=Math.floor(Math.random()*(max-min))+min;
    if(randNum == exclude){
        return genrateRandomNumber(min,max,exclude);
    }
    else return randNum;
}
const GameScreen=props=> {
    const[currentGuess,setCurrentGuess]=useState(genrateRandomNumber(1,100,props.userChoice))
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Opponent's Guess</Text>
            <Text style={styles.text}>{currentGuess}</Text>
            <Card style={styles.card}>
                <Button title="LOWER" color={color.primary}/>
                <Button title="GRATER" color={color.accent}/>
            </Card>
        </View>
    )
}
const styles=StyleSheet.create({
container:{
   alignItems:'center',
   padding:20
},
card:{
    flexDirection:'row',
    width:'40%',
    justifyContent:'space-around',
    margin:10
},
text:{
    fontSize:20
}
})
export default  GameScreen;