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

import MiddleData from './MiddleData'

export default class MyMiddleView extends Component {
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
                {/** */}
                {this.renderAllItem()}
            </View>
        );
    }

    renderAllItem() {

        //定义组件数据
        let itemArr = [];
        //遍历
        for (let i = 0; i < MiddleData.length; i++) {
            //取出单独的数据
            let data = MiddleData[i];
            //创建组件装入数据
            itemArr.push(
                <InnerView key={i} iconName={data.iconName} title={data.title}/>
            );
        }
        //返回
        return itemArr;


    }
}
class InnerView extends Component {
    render() {
        return (
            <TouchableOpacity>
                <View style={{alignItems:'center'}}>
                    <Image source={{uri:this.props.iconName}} style={{width:42,height:33}}/>
                    <Text style={{color:'gray',fontSize:12,justifyContent:'center'}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );

    }


}
const styles = StyleSheet.create({
    container: {
        //设置主轴的方向
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-around'
    },


});


