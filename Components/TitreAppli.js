import React from 'react'
import { StyleSheet, View, SafeAreaView, Text} from 'react-native'


export default class TitreAppli extends React.Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Welcome to the Cat'sWorkshop</Text> 
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "azure",
    alignItems: "center",
    justifyContent: "top",
  },
});