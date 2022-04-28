import React from "react";
import { View, SafeAreaView, Text, StyleSheet, Button } from "react-native";
import TitreAppli from '../TitreAppli'
import Search from '../Search'
import Menu from '../Menu'

export default function Settings() {

  return (
    <SafeAreaView>
      <TitreAppli />
      <Search />
      <Menu />
    </SafeAreaView>
  );
}