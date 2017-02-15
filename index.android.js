/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    Navigator
} from 'react-native';

import launchImage from "./component/Main/launchImage"

class Shopping extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{name:'启动页',component:launchImage}}
                //配置场景
                configureScene={
             (route)=>{
               return 
                  Navigator.SceneConfigs.PushFromRight;
                  // gestures: null,
              
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
});

AppRegistry.registerComponent('shopping', () => Shopping);
