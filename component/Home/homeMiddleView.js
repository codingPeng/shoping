/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');
//引入外部的组件
import MiddleCommonView from './middleCommonView'

//引入外部的数据
import TopMiddleData from '../../LocalData/HomeTopMiddleLeft'


export default class HomeMiddleView extends Component {


    render() {
        return (
            <View style={styles.container}>
                {/**左边 */}
                {this.renderLeftView()}
                {/**右边 */}
                <View>
                    {this.renderRightView()}
                </View>


            </View>
        );
    }

    //左边的view
    renderLeftView() {
        //组件数组
        let itemArr = [];
        //取出具体的数据
        let leftData = TopMiddleData.dataLeft;
        for (let i = 0; i < leftData.length; i++) {
            let data = leftData[i];
            itemArr.push(
                <TouchableOpacity style={styles.leftViewStyle} key={i}>
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri:data.img1}} style={{width:80,height:34,resizeMode:'contain'}}/>
                        <Image source={{uri:data.img2}} style={{width:70,height:30,resizeMode:'contain'}}/>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'gray'}}>{data.title}</Text>

                        <View style={styles.leftBottomStyle}>
                            <Text style={{fontSize:14,color:'blue'}}>{data.price}</Text>
                            <Text style={{fontSize:14,color:'orange',backgroundColor:'yellow'}}>{data.sale}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }
        return itemArr;


    }

    //右边的View
    renderRightView() {
        //组件数组
        let itemArr = [];
        //取出具体的数据
        let rightData = TopMiddleData.dataRight;
        for (let i = 0; i < rightData.length; i++) {
            let data = rightData[i];
            itemArr.push(
                <MiddleCommonView
                    key={i}
                    title={data.title}
                    subTitle={data.subTitle}
                    rightIconName={data.rightImage}
                    titleColor={data.titleColor}
                />
            );

        }
        //返回数组组件
        return itemArr;

    }


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        //设置主轴方向
        flexDirection: 'row',
        marginTop: 20,

    },
    leftViewStyle: {
        width: width * 0.5 - 0.5,
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        // marginRight:1,
        height: 120,
    },
    leftBottomStyle: {
        flexDirection: 'row',
    }

});


