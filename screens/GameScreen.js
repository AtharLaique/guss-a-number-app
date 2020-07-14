import React,{useState, useRef} from 'react';
import {Text, View , StyleSheet,Button,Alert} from 'react-native'
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

const GameScreen=(props)=> {
    const[currentGuess,setCurrentGuess]=useState(genrateRandomNumber(1,100,props.userChoice));
    const currentLow=useRef(1);
    const currentMax=useRef(100)
    const nextGuessHandler=(direction)=>{
        if((direction == 'lower' && currentGuess < props.userChoice)||(direction == 'grater' && currentGuess > props.userChoice))
        {
            console.log("alert")
             Alert.alert("Don\'t lie !", "You Knoe that this is wrong...", [{ text: "Sorry", style: "cancel"  }]);
                return;
        }
        if(direction==="lower"){
            currentMax.current=currentGuess;
        }else{
            currentLow.current=currentGuess;
        }
       const nextNum= genrateRandomNumber(currentLow.current,currentMax.current,currentGuess);
       setCurrentGuess(nextNum)
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Opponent's Guess</Text>
            <Text style={styles.text}>{currentGuess}</Text>
            <Card style={styles.card}>
                <Button title="LOWER" 
                        color={color.primary}
                        onPress={nextGuessHandler.bind(this,'lower')}/>
                <Button title="GRATER" 
                        color={color.accent}
                        onPress={nextGuessHandler.bind(this,'grater')}/>
            </Card>
        </View>
    )
}
export default GameScreen;
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