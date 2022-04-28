import React from 'react'
import { Text, SafeAreaView, View, Button, TextInput, StyleSheet } from 'react-native';


class FormCo extends React.Component {
  constructor(props) {
    super(props);
    this.loginText = ""
    this.mdpText = ""
    this.state = {login: ''};
  }

  handleChangeLogin(text) {
    this.loginText = text
  }

  handleChangeMdp(text) {
    this.mdpText = text
  }

  handleSubmit() {
    this.setState({login: this.loginText, mdp: this.mdpText})
  
  }

  render() {
    return (
    	<SafeAreaView style={styles.container}>
    		<Text>Login :</Text>
    		<TextInput  onChangeText={(text) => this.handleChangeLogin(text)} ></TextInput>
    		<Text>Mdp :</Text>
    		<TextInput secureTextEntry={true} onChangeText={(text) => this.handleChangeMdp(text)} ></TextInput>
    		<Button title="Envoyer" onPress={() => this.handleSubmit()} />
    	</SafeAreaView>

  	)
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "azure",
    alignItems: "center",
    justifyContent: "top",
  },
});

export default FormCo