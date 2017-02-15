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
    TouchableOpacity,
    Platform
} from 'react-native';

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');


export default class MyHeaderView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconName: '',
            title: '',
        }
    }


    render() {
        return (
            <View style={styles.container}>
                {/** 上部分*/}
                {this.renderTopView()}
                {/** 下部分*/}
                {this.renderBottomView()}
            </View>
        );
    }

    /**上部分 */
    renderTopView() {
        return (
            <View style={styles.topViewStyle}>
                <Image source={{uri:'see'}} style={styles.topLeftImageStyles}/>
                <View style={styles.leftTopViewStyle}>
                    <Text style={{ fontSize:18,color:'white',fontWeight:'bold'}}>RN电商</Text>
                    <Image source={{uri:'avatar_vip'}} style={{width:18,height:18,marginLeft:5}}/>
                </View>
                {/**最右边的箭头 */}
                <Image source={{uri:'icon_cell_rightarrow'}} style={styles.rightTopViewStyle}/>
            </View>
        );
    }

    /**下部分 */
    renderBottomView() {
        return (
            <View style={styles.bottomItemStyle}>
                {this.renderBottomItem()}
            </View>


        );


    }

    renderBottomItem() {
        //数组
        let itemArr = [];
        //数据数组
        let data = [{'number': '100', 'title': '优惠券'},
            {'number': '12', 'title': '评价'},
            {'number': '40', 'title': '收藏'}]
        //遍历创建数组装入数组
        for (let i = 0; i < data.length; i++) {
            //取出单独的数据
            let item = data[i];
            itemArr.push(
                <TouchableOpacity key={i}>
                    <View style={styles.bottomInnerStyle}>
                        <Text style={{color:'white'}}>{item.number}</Text>
                        <Text style={{color:'white'}}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
        //返回数据
        return itemArr;

    }

}
const styles = StyleSheet.create({
    topViewStyle: {
        flexDirection: 'row',
        height: 150,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    leftTopViewStyle: {
        flexDirection: 'row',
        width: width * 0.72,
        height: Platform.os == 'ios' ? 280 : 70,
        marginLeft: 10,
        alignItems: 'center'
    },
    container: {
        //设置主轴的方向
        //   flexDirection:'column',
        height: Platform.os == 'ios' ? 400 : 160,
        backgroundColor: 'orange',
    },
    bottomItemStyle: {
        flexDirection: 'row',
        //绝对定位
        position: 'absolute',
        bottom: 0,

    },
    bottomInnerStyle: {
        width: width / 3,
        height: 41,
        backgroundColor: 'rgba(255,255,255,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: 'white'

    },
    rightTopViewStyle: {
        width: 8,
        height: 13,
        marginRight: 10
    },
    topLeftImageStyles: {
        width: 50,
        height: 50,
        marginLeft: 10,
        borderRadius: 35,
        borderWidth: 3,
        borderColor: 'rgba(0,0,0,0.2)'
    }
});


