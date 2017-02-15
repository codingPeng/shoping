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
    TouchableOpacity
} from 'react-native';

export default class HomeDeatil extends Component {

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={()=>{this.popTopHome()}}>
                <View >
                    <Text style={styles.welcome}>
                        詳情
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    popTopHome() {
        const {navigator} =this.props;
        if (navigator) {
            navigator.pop();
        }

    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});


