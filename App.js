/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Alert, Image} from 'react-native';

import Tapa from './Tapa';
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    tapa = new Tapa(props);
    this.state = {view: 'main'};
  }
  
  render() {
    if(this.state.view == 'main') {
      return (
      <View style={styles.container}>
        <Image style={styles.title} source={require('./img/tapa.png')}></Image>
        <TouchableOpacity onPress={
            () => {
              // Alert.alert("You hit play!", "Why would you do that! This game is bad!!")
              this.setState(ps => {
                return {view: 'game'};
              });
            }
          }>
          <Image style={styles.play} source={require('./img/play.png')}></Image>  
        </TouchableOpacity>
      </View>
      );
    }
    else if(this.state.view == 'game') {
      return tapa.render();
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    width: 250,
    height: 220,
    alignItems: 'flex-start'
  },
  play: {
    width: 180,
    height: 160,
    alignItems: 'center'
  }
});
