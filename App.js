import React from 'react'
import { Text, SafeAreaView, View, Button } from 'react-native';
import JSONPretty from 'react-json-pretty'
import axios from 'axios'
import Login from './Components/Screens/Login'
import Inscrire from './Components/Screens/Inscrire'
import Home from './Components/Screens/Home'
import Navigator from './Components/AppContainer'


const getMyApi = async () => {
  const response = await axios.get('http://172.20.10.3/projet2/api.php?op=select')
  const data = response.data
  console.log('getMyApi data ')
  console.log(data)
  return data
}


export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { data: [] }
    this.loadMyApi()
  }

  loadMyApi = () => {
    getMyApi().then((data) => {
      this.setState({ data: data })
    })
  }


  render() {
    return <Navigator />;
  }
}
