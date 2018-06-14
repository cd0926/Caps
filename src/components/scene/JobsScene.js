import React, { Component } from 'react';
import { 
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert
       } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class JobsScene extends Component {
    onPress() {
      Actions.Jobs();
      }
    onPressB() {
      Actions.Jobbasic();
    }
    onPressR() {
      Actions.RecomJob();
    }
    onPressS() {
      Actions.Saramin();
    }
    onPressJ() {
      Actions.JobKorea();
    }
    onPressW() {
      Actions.Worknet();
    }
    onPressRe() {
      Actions.Ncsrecom();
    }
    Complete = () => {
        Alert.alert(
          '알림',
          '준비중입니다',
          [
            { text: '확인' } 
          ],
        )
      }
      render() {
        return (
          <View style={{ flex: 1, backgroundColor: 'white' }}>
             <View style={styles.textcontainer}>
                 <Text style={styles.textstyle}>My Career</Text>
             </View>
             <View style={styles.container}>

               
             <TouchableOpacity onPress={this.onPressRe}>
                 <View style={styles.iconcontainer}>
                
                   <Text style={{ margin: 10, fontSize: 23, textAlign: 'center', color: 'white' }}>
                    추천 콘텐츠
          </Text>
                 </View>
             </TouchableOpacity>    
                
            <TouchableOpacity onPress={this.onPressB}>
                 <View style={styles.iconcontainer}>
                  
                 <Text style={{ margin: 10, fontSize: 23, textAlign: 'center', color: 'white' }}>
                    직업 기초능력 진단
          </Text>
                 </View>
            </TouchableOpacity>  
             </View>
             <View style={styles.textcontainer}>
             <Text style={styles.textstyle}>취업 정보</Text>
             </View>
             <View style={styles.container}>
             <TouchableOpacity onPress={this.onPressR}>
                 <View style={styles.iconcontainer}>
                 <Text style={{ margin: 10, fontSize: 23, textAlign: 'center', color: 'white' }}>
                    NCS 홈페이지
          </Text>
                 </View>

                
             </TouchableOpacity>
             <TouchableOpacity onPress={this.onPressW}>
                 <View style={styles.iconcontainer}>
                 
                 <Text style={{ margin: 10, fontSize: 23, textAlign: 'center', color: 'white' }}>
                    워크넷
          </Text>
                 </View>
             </TouchableOpacity>
  
             </View>
             <View style={styles.container}>
             <TouchableOpacity onPress={this.onPressS}>
                 <View style={styles.iconcontainer}>
                 
                 <Text style={{ margin: 10, fontSize: 23, textAlign: 'center', color: 'white' }}>
                    사람인
          </Text>
                 </View>
             </TouchableOpacity>
                 
             <TouchableOpacity onPress={this.onPressJ}>
                 <View style={styles.iconcontainer}>
                 
                 <Text style={{ margin: 10, fontSize: 23, textAlign: 'center', color: 'white' }}>
                    잡코리아
          </Text>
                 </View>
             </TouchableOpacity>
              
             </View>
          </View>

        )
      }
}

const styles = StyleSheet.create({

  iconcontainer: {
    width: 190,
    height: 110,
    borderWidth: 2,
    alignItems: 'center',
    backgroundColor: '#FFA500',
    padding: 5,
    borderColor: 'orange',
  },

  textcontainer: {
    width: 420,
    height: 40,
    padding: 10
  },
  container: {
    width: 420,
    height: 120,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  textstyle: {
    fontSize: 15,
    fontWeight: 'bold'
  }
});
