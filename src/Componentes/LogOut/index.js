import React from 'react';
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native';

export default function LogOut() {
 return (
   <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Sair</Text>
    </TouchableOpacity>
   </View>
  );
}



const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#4569AF",
      alignItems:'center',
      justifyContent:'center',
    },
    text:{
      fontSize:35,
      color:'#ffffff',
    },
    button:{
        width:100,
        height:200,
        borderRadius:10,
        borderBottomColor:"#ffffff"
    }
  });