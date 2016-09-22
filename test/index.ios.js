/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Hemo from './component/hemo.js'
import {
  NavigatorIOS,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class test extends Component {
  render() {
    return (

        <NavigatorIOS 
        style={styles.flex}
        initialRoute={{
          component:Hemo,
          title:'首页'
        }}
        />

    );
  }
}

const styles = StyleSheet.create({
  flex:{
    flex:1
  }
});

AppRegistry.registerComponent('test', () => test);
