import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet} from 'react-native';

export default function Cupons() {
 return (
   <ScrollView style={styles.header}>
    <Image source={require('../../assests/descontocupom.png')}/>
    <Image source={require('../../assests/descontocupom.png')}/>
    <Image source={require('../../assests/descontocupom.png')}/>
   </ScrollView>
  );
}


const styles = StyleSheet.create({
    header:{
        height:100,
        width:300,
        borderRadius:12,
        margin:8,
        padding:8,
        marginTop:280,
    },
})