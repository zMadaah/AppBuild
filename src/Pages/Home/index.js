import React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

import Card from "../../Componentes/Card";
import Shop from "../../Componentes/Shop";
import Cupons from "../../Componentes/Cupons";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather name="search" size={24} color="black" />
          <TextInput style={styles.input}>O que procura</TextInput>
        </View>
      </View>
      <View style={{alignItems:'center',marginTop:30}}>
        <Card/>
      </View>
      <View style={{alignItems:'center',marginTop:300}}>
        <Shop/>
        <ScrollView>
          <Cupons/>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#4569AF"
  },
  header: {
    paddingTop:50,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 20,
  },
  inputArea: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
    backgroundColor: "#e2e2e2",
    paddingLeft: 10,
    height: 35,
    borderRadius: 12,
  },
  input: {
    paddingHorizontal: 10,
    fontSize: 14,
    width: "90%",
  },
  service: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  title: {
    paddingHorizontal: 15,
    fontSize: 18,
    color: "#4f4a4a",
    fontWeight: "bold",
  },
});
