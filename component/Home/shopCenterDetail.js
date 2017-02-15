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
    TouchableOpacity,
    Image,
    WebView,

} from 'react-native';

export default class ShopCenterDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailUrl: this.props.url + '?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594',
        }
    }

    render() {
        // alert(this.state.detailUrl);

        return (
            <View style={styles.container}>
                {/**导航条 */}
                {this.renderNavBar()}

                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri:this.state.detailUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
            </View>
        );
    }

    popTopHome() {
        const {navigator} =this.props;
        if (navigator) {
            navigator.pop();
        }

    }

    //导航条
    renderNavBar() {
        return (
            <View style={styles.navoutBarStyles}>
                <TouchableOpacity onPress={()=>{this.popTopHome()}} style={styles.leftViewStyle}>
                    <Image source={{uri:'icon_camera_back_highlighted'}} style={styles.rightNavBarStyle}></Image>
                </TouchableOpacity>

                <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>购物中心详情</Text>
                <TouchableOpacity onPress={()=>{alert('0')}} style={styles.rightViewStyle}>
                    <Image source={{uri:'icon_mine_setting'}} style={styles.rightNavBarStyle}></Image>
                </TouchableOpacity>
            </View>
        );


    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    leftViewStyle: {
        //绝对定位
        position: 'absolute',
        left: 10,
        bottom: 18


    }
});


