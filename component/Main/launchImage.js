/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *啓動圖片
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
    TouchableOpacity
} from 'react-native';
/**导入外部组件 */
import Main from "./main"

export default class LaunchImage extends Component {

    render() {
        return (

            <Image source={{uri:'launchimage'}} style={styles.launchImageStyle}/>

        );
    }

    //复杂的操作：定时器|网路请求
    componentDidMount() {
        //定时隔1s后，切换到main页面
        setTimeout(() => {
            //页面的切换
            this.props.navigator.replace({
                component: Main,
            });


        }, 1000);
    }


}

const styles = StyleSheet.create({

    launchImageStyle: {
        flex: 1
    }


});


