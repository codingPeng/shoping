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
    Platform,
    ScrollView

} from 'react-native';

/**
 * 引入外部的组件
 */
import CommonCell from './commonCell'


export default class More extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/**导航条 */}
                {this.renderNavBar()}
                <ScrollView>
                    <View style={styles.commonCellStyle}>
                        <CommonCell title='扫一扫'/>
                    </View>

                    <View style={styles.commonCellStyle}>
                        <CommonCell title='省流量模式' isSwitch={true}/>
                    </View>

                    <View style={styles.commonCellStyle}>
                        <CommonCell title='扫一扫'/>
                        <CommonCell title='扫一扫'/>
                        <CommonCell title='扫一扫'/>
                        <CommonCell title='清楚缓存' rightTitle='1.23M'/>
                        <CommonCell title='扫一扫'/>
                    </View>

                    <View style={styles.commonCellStyle}>
                        <CommonCell title='扫一扫'/>
                        <CommonCell title='扫一扫'/>
                        <CommonCell title='扫一扫'/>

                    </View>


                </ScrollView>
            </View>

        );
    }

//导航条
    renderNavBar() {
        return (
            <View style={styles.navoutBarStyles}>
                <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>更多</Text>
                <TouchableOpacity onPress={()=>{alert('0')}} style={styles.rightViewStyle}>
                    <Image source={{uri:'icon_mine_setting'}} style={styles.rightNavBarStyle}></Image>
                </TouchableOpacity>
            </View>
        );


    }


}

const styles = StyleSheet.create({
    commonCellStyle: {
        marginTop: 10
    },
    navoutBarStyles: {
        backgroundColor: 'orange',
        //设置主轴方向
        flexDirection: 'row',
        height: 70,
        //设置主轴对齐方式
        justifyContent: 'center',
        alignItems: 'center'

    },
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    rightNavBarStyle: {
        width: 30,
        height: 30,

    },
    rightViewStyle: {
        //绝对定位
        position: 'absolute',
        right: 10,
        bottom: 18
    }
});


