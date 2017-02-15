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
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
/**
 * 引入外部的组件
 */

  import MyCell from './commonMycell'
  import MyMiddleView from './commonMiddleView'
  import MyHeaderView  from './commonHeaderView'
export default class Mine extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView 
          style={styles.scrollViewStyle}
          contentInset={{top:-200}}
          contentOffset={{y:200}}
        >
        <MyHeaderView />


          <View style={{marginTop:20}}>
               <MyCell 
            leftIconName='collect' 
            leftTitle='我的订单'
            rightTitle='查看全部订单'
            />
          </View>
          <MyMiddleView />

          <View style={{marginTop:10}}>
            <MyCell 
            leftIconName='draft' 
            leftTitle='钱包'
            rightTitle='￥200'
            />
            <MyCell 
            leftIconName='like' 
            leftTitle='抵用券'
            rightTitle='10张'
            />
          </View>
        
         <View style={{marginTop:20}}>
               <MyCell 
            leftIconName='card' 
            leftTitle='积分商城'
            rightTitle='10张'
            />
          </View>
          <View style={{marginTop:10}}>
               <MyCell 
            leftIconName='new_friend' 
            leftTitle='今日推荐'
            rightIconName='me_new'
            />
          </View>
          <View style={{marginTop:10}}>
            <MyCell 
            leftIconName='pay' 
            leftTitle='我要合作'
            rightTitle='轻松开店,招财进宝'
            />
          </View>
        
        </ScrollView>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewStyle:{
      backgroundColor:'#e8e8e8'
  },

  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});


