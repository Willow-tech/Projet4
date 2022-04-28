import React from 'react'
import { View, SafeAreaView, Text, TextInput, StyleSheet, Button } from 'react-native'

export default class Search extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TextInput placeholder='Jouet' />
                <Button title='Rechercher' onPress={() => { }} />
            </SafeAreaView>
            )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    backgroundColor: "azure",
    alignItems: "center",
    justifyContent: "top",
  },
});
