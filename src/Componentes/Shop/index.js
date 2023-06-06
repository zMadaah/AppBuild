import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {MaterialIcons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';



export default function Shop() {
    return (
        <View style={styles.container}>
        
        
        <View style={styles.box}>
          <Text style={ styles.TextBox}>Farmácias</Text>
          <View style={{flexDirection:'row', justifyContent:'space-between',}}>
          <TouchableOpacity >
              <Image source={require('../../assests/Araujo.png')}/>
              <Text>Araujo</Text>
          </TouchableOpacity>
  
          <TouchableOpacity >
              <Image source={require('../../assests/Farma.png')}/>
              <Text> Farma </Text>
          </TouchableOpacity>
  
          <TouchableOpacity >
              <Image source={require('../../assests/PanVel.png')} />
              <Text>PanVel</Text>
          </TouchableOpacity>
  
          <TouchableOpacity >
              <Image 
              source={require('../../assests/DrogaRaia.png')}/>
              <Text>DrogaRaia</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
      container:{
          flex:1,
      },
      text:{
        color: "#0b5394",
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: '100%',
        fontSize: 20,
        fontWeight:'300',
    },
      box: {
        width: 370,
        height: 230,
        backgroundColor: "#ffffff",
        borderRadius: 17,
        marginLeft:8,
        padding: 10,
        marginTop:25,
        
    },
      TextBox:{
        color: "#0b5394",
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom:20,
        width: '100%',
        fontSize: 20,
        fontWeight:'300',
      },
      
      
    });