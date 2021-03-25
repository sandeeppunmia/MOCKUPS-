import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserSignUpScreen from './screens/UserSignUpScreen';

export default class App extends Component{
  render(){
    return(
      <UserSignUpScreen/>
    )
  }
}