import React,{useState} from 'react';
import {Text, View , StyleSheet} from 'react-native'

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

    )
}
const styles=StyleSheet.create({

})
export default  GameScreen;