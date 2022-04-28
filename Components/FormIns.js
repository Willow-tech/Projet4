import React from 'react'
import { Text, SafeAreaView, View, Button, TextInput, StyleSheet  } from 'react-native';


class FormIns extends React.Component {
  constructor(props) {
    super(props);
    this.loginText = ""
    this.mdpText = ""
    this.mdp2Text = ""
    this.mailText = ""
    this.state = {login: ''};
  }

  handleChangeLogin(text) {
    this.loginText = text
  }

  handleChangeMdp(text) {
    this.mdpText = text
  }

  handleChangeMdp2(text) {
    this.mdp2Text = text
  }

  handleChangeMail(text) {
    this.mailText = text
  }

  handleSubmit() {
    this.setState({login: this.loginText, mdp: this.mdpText})
  
  }

  render() {
    return (
    	<SafeAreaView>
    		<Text>Login :</Text>
    		<TextInput  onChangeText={(text) => this.handleChangeLogin(text)} ></TextInput>
    		<Text>Mdp :</Text>
    		<TextInput secureTextEntry={true} onChangeText={(text) => this.handleChangeMdp(text)} ></TextInput>
        <Text>Confirmation Mdp :</Text>
        <TextInput secureTextEntry={true} onChangeText={(text) => this.handleChangeMdp2(text)} ></TextInput>
        <Text>Email :</Text>
        <TextInput  onChangeText={(text) => this.handleChangeMail(text)} ></TextInput>
    		<Button title="S'inscrire" onPress={() => this.handleSubmit()} />
    	</SafeAreaView>

  	)
  }
}

export default FormIns