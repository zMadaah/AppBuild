import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

import { FontAwesome5, MaterialIcons, FontAwesome } from "@expo/vector-icons";

export default function EditProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Text style={styles.text}>Editar Dados</Text>
        <FontAwesome5 name="user-cog" size={18} color="white" />
      </View>

      <View style={styles.email}>
        <Text style={styles.text}>E-mail</Text>
        <MaterialIcons name="email" size={24} color="white" />
      </View>

      <View style={styles.password}>
        <Text style={styles.text}>Alterar senha</Text>
        <FontAwesome name="lock" size={25} color="white" />
      </View>

      <View style={styles.cancel}>
        <Text style={styles.text}>Encerrar conta</Text>
        <MaterialIcons name="cancel" size={24} color="white" />
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 5,
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  email: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 5,
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  password: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 5,
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  cancel: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin:5,
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },

  text: {
    fontSize: 20,
    color: "#ffffff",
    marginTop: 8,
    marginBottom: 20,
    flexDirection: "row",
  },
});
