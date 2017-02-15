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
let {width, height} =Dimensions.get('window');

//引入外部的数据
import MiddleCommonView from './middleCommonView'
import HomeMiddleBottom from '../../LocalData/MT_Home_D4'

export default class HomeMiddleBottomView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //回调函数
            popTopHome: null,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/**上部分 */}
                <View style={styles.topViewStyle}>


                </View>
                {/**下部分 */}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomView()}
                </View>
            </View>
        );
    }

    //下边的View
    renderBottomView() {
        //组件数组
        let itemArr = [];
        //取出具体的数据
        let bottomData = HomeMiddleBottom.data;
        for (let i = 0; i < bottomData.length; i++) {
            let data = bottomData[i];
            itemArr.push(
                <MiddleCommonView
                    title={data.maintitle}
                    subTitle={data.deputytitle}
                    rightIconName={this.dealWithImgUrl(data.imageurl)}
                    titleColor={data.typeface_color}
                    tplurl={data.tplurl}
                    key={i}
                    callBackClickCell={(data)=>this.popToTopView(data)}
                />
            );

        }
        //返回数组组件
        return itemArr;

    }

//向父级传递事件
    popToTopView(data) {
        this.props.popTopHome(data);
    }


    //处理图像的尺寸
    dealWithImgUrl(url) {
        if (url.search('w.h') == -1) {
            //没有找到 正常返回
            return url;
        } else {
            return url.replace('w.h', '120.90');
        }
    }


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 20,
    },
    topViewStyle: {},
    bottomViewStyle: {
        //设置主轴方向
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

});


