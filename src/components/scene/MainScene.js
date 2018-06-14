import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import Banner from '../Banner';
import Notice from '../Notice';
import Schedule from '../Schedule';
import SNS from '../SNS';
import Jobs from '../Jobs';

class MainScene extends Component {
  render() {
    // console.log(this.props);
    return (
        <ScrollView>

            <Banner />
            
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Notice />
                <Schedule />
              </View >
            
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <SNS />
                <Jobs />
              </View >

        </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  
  return {
    drawer: state.selectedLibraryId
  };
}

export default connect(mapStateToProps)(MainScene);
