/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

import Login from './src/pages/Login';


export default class App extends Component<[]> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
        backgroundColor="#1c313a"
        barStyle="light-content"
        />

        <Text style={{color:'#ffffff', fontSize:40}}>Venda</Text>
        
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#E65100',
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center'
  }

});
