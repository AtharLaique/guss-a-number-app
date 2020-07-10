import React from 'react';
import {TextInput,StyleSheet} from 'react-native';

const Input=props=>{
    //{...pros} Means spred all the props here. This will override the base style 
    return < TextInput  {...props} style={{...styles.input,...props.style}}/>
}
export default  Input;
const styles=StyleSheet.create({
    inupt:{
        height:30,
        borderBottomColor:'grey',
        borderBottomWidth:1,
        marginVertical:1
    }
})
