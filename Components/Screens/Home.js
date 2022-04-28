import React from "react";
import { View, SafeAreaView, Text, StyleSheet, Button } from "react-native";
import TitreAppli from '../TitreAppli'
import Search from '../Search'
import Menu from '../Menu'

export default function Home() {

  return (
    <SafeAreaView style={styles.container}>
      <TitreAppli />
      <Search />
      <Text>Cette Application est une application de vente de jouet.</Text>
      <Text>On peut également échanger un jouet contre un autre, faire du troc.</Text>
      <Text style={styles.text}>Elle vient d'un projet d'étude de base, et est créé par Pauline et Yanis</Text>
      <Menu />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "azure",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    flex: 0.5,
    backgroundColor: "azure",
    alignItems: "center",
    justifyContent: "center",
  }
});