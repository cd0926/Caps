import React, { Component } from 'react';
import { View, AppRegistry, TextInput, Keyboard } from 'react-native';
import NCSrecomlist from '../albums/ncsrecom_list';

export default class Ncsrecom extends Component {
 
  
    render() {
    
      return (
        <View>

        <NCSrecomlist />

        </View>
      );
    }
  }