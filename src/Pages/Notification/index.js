import React from 'react';
import { View,Text, StyleSheet} from 'react-native';

export default function Profile() {
 return (
   <View style={styles.container}>
    <Text style={styles.text}>Tela de Notificação</Text>
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
  }
});