import React from 'react';
import { View,Text, StyleSheet} from 'react-native';


import User from '../../Componentes/User';
import EditProfile from '../../Componentes/EditProfile';
import LogOut from '../../Componentes/LogOut';

export default function Profile() {
 return (
   <View style={styles.container}>
    <User/>
    <EditProfile/>
    <LogOut/>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#4569AF",
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    fontSize:30,
    color:'#ffffff',
  }
});