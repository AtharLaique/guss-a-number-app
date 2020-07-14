import React from 'react';
import {View, Text ,Button, StyleSheet} from 'react-native';
//Custome components
import Card from '../components/Card';
import color from '../constants/color';

export default function Confirmed(props) {
    return (
        <View style={styles.confirmContainer}>
        <Card style={styles.confirm}>
          <Text>Your Selected </Text>
          <Text>{props.selectedNumber}</Text>
          <Button title="Start Game" color={color.start} onPress={props.startGame} />
        </Card>
      </View>
    )
}
const styles=StyleSheet.create({ 
  confirmContainer: {
    flex: 1,
    alignItems: "center",
  },
  confirm: {
    marginTop: 20,
    alignItems: "center",
    width: "55%",
  }
})