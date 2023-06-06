import React from 'react';
import { View,Text, StyleSheet} from 'react-native';

import EditProfile from '../../Componentes/EditProfile';

export default function Profile() {
 return (
   <View style={styles.container}>
    <EditProfile/>
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