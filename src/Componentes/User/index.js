import React from 'react';
import { View,Text, Image, StyleSheet } from 'react-native';

export default function User() {
 return (
   <View style={styles.container}>
    <Image
    style={{width:100, height:100,borderRadius:50}}
    source={require('../../assests/user.png')}
    />
   </View>
  );
}


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#4569AF",
      alignItems:'center',
      justifyContent:'center',
      marginTop:90,
      marginBottom:90,
    },
    text:{
      fontSize:35,
      color:'#ffffff',
    }
  });