import React, { Component } from 'react';
import { Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  AppRegistry,
  Keyboard,
  TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input, Spinner } from '../common';
import { drawer } from '../../actions';
import FontAwesome, { Icons } from 'react-native-fontawesome';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.drawer();
  }
  onPress2() {
    Actions.MainScene();
  }

   render() {
      return (
        <View>               
          <View style={styles.navBar}>
            <View style={{ width: 100, height: 73.8 }} />
            
          <TouchableOpacity onPress={this.onPress2}>
          <Image style={{ width: 172, height: 51 }} source={require('../../../img/logo.png')} />
          </TouchableOpacity>
          
            <View style={{ width: 90, height: 73.8, alignItems: 'center', justifyContent: 'center'}} >
            <View style={{ width: 15}} />
            <TouchableOpacity onPress={this.onPress}>
            <FontAwesome style={{ fontSize: 50, marginLeft: 30}}>{Icons.bars}</FontAwesome>
            </TouchableOpacity>
            </View>
          
          </View>    
        </View>  
      );
   }
}

/*<Image source={require('./img/menu.png')} style={{width: 30, height: 30}}/>*/


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      borderWidth: 1
    },
    navBar: {
      height: 73.8,
      backgroundColor: 'white',
      justifyContent: 'center',
        alignItems: 'center',
      flexDirection: 'row',
     },
    navBarText: {
      fontSize: 22,
      color: 'black',
    }
  });

  export default connect(null, { drawer })(Navbar);
