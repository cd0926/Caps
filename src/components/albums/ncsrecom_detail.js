import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View, TouchableOpacity, Linking } from 'react-native';


import { Card, CardSection } from '../common';
// import Card from '../common/card';
// import CardSection from '../common/card_section';


const Ncsrecomdetail = ({ ncs }) => {
  const { SECTION, SUBABILITY, CONTENT, URL } = ncs;
  const {  
    headerTextStyle, dateTextStyle,
    } = styles;

    return ( 
        <Card> 
              <TouchableOpacity onPress={() => Linking.openURL(URL)}>
              <CardSection> 
                      <View>
                        
                          <Text style={headerTextStyle}>[{SECTION}] - {SUBABILITY}</Text>
                          
                          <Text style={dateTextStyle}>{CONTENT}</Text>
                          
                      </View> 
              </CardSection>
      
              </TouchableOpacity>
        </Card>
        
  );
};



const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 13
  },
  dateTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default Ncsrecomdetail;