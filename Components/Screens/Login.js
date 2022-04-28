import React from "react";
import { View, SafeAreaView, Text, StyleSheet, Button } from "react-native";
import TitreAppli from '../TitreAppli'
import FormCo from '../FormCo'
import Inscrire from './Inscrire'
import Home from './Home'
import Navigator from '../AppContainer'


export default function Login({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <TitreAppli />
      <FormCo />
      <Button title ="S'inscrire" onPress={() => {navigation.navigate("Inscrire")}} /> 
      <Button title="Compte Invité" onPress={() => {navigation.navigate("Home")}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: "azure",
    alignItems: "center",
    justifyContent: "center",
  },
});
