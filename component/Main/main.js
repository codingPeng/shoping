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
    Platform,
    Navigator
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from '../Home/home'
import Mine from '../Mine/mine'
import Shop from '../Shop/shop'
import More from '../More/more'

export default class Main extends Component {
    //   {/*状态机*/}
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',//默认选中主页
        }

    }

    render() {

        return (
            <TabNavigator>
                {this.renderTabNavigator('首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected', 'home', Home)}
                {this.renderTabNavigator('商家', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', 'shop', Shop)}
                {this.renderTabNavigator('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected', 'mine', Mine)}
                {this.renderTabNavigator('更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected', 'more', More)}
            </TabNavigator>
        );
    }

    renderTabNavigator(name, iconName, iconSelectName, selectedTab, Component) {
        return (
            <TabNavigator.Item
                title={name}
                renderIcon={()=><Image source={{uri:iconName}}  style={styles.iconStyle}/>}
                renderSelectedIcon={()=><Image source={{uri:iconSelectName}}  style={styles.iconStyle}/>}
                selected={this.state.selectedTab === selectedTab}
                onPress={()=>this.setState({selectedTab:selectedTab})}
            >
                <Navigator
                    initialRoute={{name:name,component:Component}}
                    //配置场景
                    configureScene={
             (route)=>{
               return ({
                  ...Navigator.SceneConfigs.PushFromRight,
                  // gestures: null,
                });
             }
           }

                    renderScene={
             (route,navigator)=>
             {
               let Component=route.component;
               return <Component {...route.params} navigator={navigator}/>
             }

           }

                />

            </TabNavigator.Item>


        );


    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    iconStyle: {
        width: Platform.os == 'ios' ? 25 : 30,
        height: Platform.os == 'ios' ? 25 : 30


    }

});


