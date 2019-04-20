/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './components/Login'
import UsersList from './components/UsersList'

import {createStackNavigator,createAppContainer} from 'react-navigation';




export default class App extends Component{
  render() {
    return (
    <AppContainer/>
    );
  }
}

class Home extends Component{
  render() {
    return (
     <View style={styles.container}>
       <Text>HIasdasd </Text>
     </View>
    );
  }
}


const AppNavigator = createStackNavigator({
  Home:  {
    screen: Login,
  },
  Profile: {
    screen: UsersList
  }
});

const AppContainer = createAppContainer(AppNavigator)



 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
