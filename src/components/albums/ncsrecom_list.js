import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';


import { Spinner } from '../common';
import Ncsrecomdetail from './ncsrecom_detail';

class Ncsrecomlist extends Component {
  state = { ncsr: [] };

  
  componentWillMount() {
    axios.post('http://192.168.0.6:3090/ncsrecom',
    {
      tdate: global.tdate
    }) //axios.post('fdsjsd/access, data).then((res)->)
       .then(response => this.setState({ ncsr: response.data }));
  }

  /*onPress() {
    Actions.Notice();
    }
*/
  renderNCS() {
    return this.state.ncsr.map(ncs =>
      <Ncsrecomdetail key={ncs.SECTION} ncs={ncs} />
    );
  }

  
  render() {
    console.log(this.state);

    if (this.state.ncsr.length === 0) {
      return <Text style={{fontSize: 22, fontWeight: 'bold'  }}> 모든부분에서 훌륭한 성적을 달성했습니다. </Text>
    }

    

    return (
      <ScrollView>
      
        {this.renderNCS()}
      
      </ScrollView>

      
    );
  }
}

export default Ncsrecomlist;
