import React from "react";
import { View, SafeAreaView, Text, StyleSheet, Button } from "react-native";
import TitreAppli from '../TitreAppli'
import FormIns from '../FormIns'

export default function Inscrire() {

  return (
    <SafeAreaView style={styles.container}>
      <TitreAppli />
      <FormIns />
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
});