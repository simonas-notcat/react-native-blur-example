/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { BlurView } from 'react-native-blur'

export default class blurexample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      iteration: 1
    }
    setInterval(() => {
      this.setState({iteration: this.state.iteration + 1})
    }, 1000)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <BlurView blurType='dark'>
          <Text style={[styles.white]}>
            Showing allways
          </Text>
          
          {this.state.iteration > 1 && this.state.iteration < 3 && <Text style={[styles.white]}>
            Shown on 2 and 3 iteration
          </Text>}
          {this.state.iteration === 3 && <Text style={[styles.white]}>
            Shown on 3 iteration
          </Text>}
        </BlurView>  
      </View>
    );
  }
}

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
  white: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('blurexample', () => blurexample);
