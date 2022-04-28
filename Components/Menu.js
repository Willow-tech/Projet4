import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, Text, Button, TouchableOpacity, Image } from 'react-native'
import Navigator from './AppContainer'
import Home from './Screens/Home'
import Jouet from './Screens/Jouet'
import Vendre from './Screens/Vendre'
import Chat from './Screens/Chat'
import Settings from './Screens/Settings'


export default function Menu({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.BStyle} activeOpacity={0.5} onPress={() => {navigation.navigate("Home")}} >
        <Image
         source={require('./img/Home.png')}
         style={styles.ImageIconStyle}
        />
        <Text style={styles.TextStyle}> Home </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.BStyle} activeOpacity={0.5} onPress={() => {navigation.navigate("Jouet")}} >
        <Image
         source={('./img/Toy.png')}
         style={styles.ImageIconStyle}
        />
        <Text style={styles.TextStyle}> Toys </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.BStyle} activeOpacity={0.5} onPress={() => {navigation.navigate("Vendre")}} >
        <Image
         source={('./img/Plus.png')}
         style={styles.ImageIconStyle}
        />
        <Text style={styles.TextStyle}> Sell </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.BStyle} activeOpacity={0.5} onPress={() => {navigation.navigate("Chat")}} >
        <Image
         source={('./img/Message.png')}
         style={styles.ImageIconStyle}
        />
        <Text style={styles.TextStyle}> Chat </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.BStyle} activeOpacity={0.5} onPress={() => {navigation.navigate("Settings")}} >
        <Image
         source={('./img/Settings.png')}
         style={styles.ImageIconStyle}
        />
        <Text style={styles.TextStyle}> Settings </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "azure",
    alignItems: "center",
    justifyContent: "bottom",
  },
  buttonBStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    flex: 0.5,
    backgroundColor: "azure",
    alignItems: "center",
    justifyContent: "bottom",
  },

});