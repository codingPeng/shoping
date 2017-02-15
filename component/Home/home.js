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
    navigator,
    Platform,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
//引入外部的组件
import HomeDeatil from './homeDeatil'
import TopView from './topView'
import HomeMiddleView from './homeMiddleView'
import ShopCenter from './shopCenter'
import ShopCenterDetail from './shopCenterDetail'
import GeustYouLike from './geustYouLike'
import MiddleCommonView from './middleCommonView'
import HomeMiddleBottomView from './homeMiddleBottomView'
//引入json数据
import HomeTopMiddle from '../../LocalData/HomeTopMiddle'

let Dimensions = require('Dimensions');
let {width, height} =Dimensions.get('window');
export default class Home extends Component {
    // 跳转到二级界面
    //跳转到购物中心的详情
    pushToShopDeatil(url) {
        // alert(this.detailWithUrl(url));

        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: '购物中心详情',
                component: ShopCenterDetail,
                //  passProps:{'url':this.detailWithUrl(url)},
                params: {'url': this.dealWithUrl(url)}
            });
        }

    }

    pushToDeatil(data) {
        // alert(data);

        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: '首頁詳情',
                component: HomeDeatil,

            });
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    {/**首页导航条 */}
                    {this.renderNavBar()}
                    <TopView  />
                    {/** 中间的内容*/}
                    <HomeMiddleView />
                    <HomeMiddleBottomView
                        popTopHome={(data)=>this.pushToDeatil(data)}
                    />
                    {/**购物中心 */}
                    <ShopCenter
                        popToHomeView={(url)=>this.pushToShopDeatil(url)}
                    />
                    {/** 猜你喜欢 */}
                    <GeustYouLike />


                </View>
            </ScrollView>
        );
    }

//处理url
    dealWithUrl(url) {
        return url.replace('imeituan://www.meituan.com/web/?url=', '');
    }


    renderNavBar() {
        return (
            <View style={styles.navBarStyle}>
                {/**左边 */}
                <TouchableOpacity onPress={()=>{this.pushToDeatil()}}>
                    <Text style={styles.LefttextStyle}>广州</Text>
                </TouchableOpacity>
                {/**中间 */}

                <TextInput
                    placeholder='输入商家，品类'
                    style={styles.TopInputStyle}
                    underlineColorAndroid={'transparent'}
                ></TextInput>

                {/**右边 */}
                <View style={styles.rightNavBarStyle}>
                    <TouchableOpacity onPress={()=>alert("0")}>
                        <Image source={{uri:'icon_homepage_message'}} style={styles.imageRightstyle}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>alert("0")}>
                        <Image source={{uri:'icon_homepage_scan'}} style={styles.imageRightstyle}/>
                    </TouchableOpacity>
                </View>

            </View>

        );

    }


}

const styles = StyleSheet.create({
    navBarStyle: {
        backgroundColor: 'orange',
        //设置主轴方向
        flexDirection: 'row',
        height: 70,
        //设置主轴对齐方式
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    container: {
        backgroundColor: '#e8e8e8',

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    LefttextStyle: {
        color: 'white',
        alignItems: 'center'
    },

    TopInputStyle: {
        width: width * 0.65,
        height: Platform.os === 'ios' ? 45 : 40,
        backgroundColor: 'white',
        marginTop: Platform.os === 'ios' ? 10 : 0,
        //设置圆角
        borderRadius: 16,
        //设置内左边距
        paddingLeft: 5,
        alignItems: 'center',

    },
    imageRightstyle: {
        width: 30,
        height: 30
    },
    rightNavBarStyle: {
        flexDirection: 'row',

    }
});


