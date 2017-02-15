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
    View
} from 'react-native';

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');

export default class MiddleBottomView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            subTitle: '',
            rightIconName: '',
            titleColor: '',
        }
    }


    render() {
        return (
            <TouchableOpacity>
                <View style={styles.container}>
                    {/**左边 */}
                    <View >
                        <Text style={[styles.titleStyle,{color:this.props.titleColor}]}>{this.props.title}</Text>
                        <Text style={styles.subTitleStyle}> {this.props.subTitle}</Text>
                    </View>
                    {/**右边 */}
                    <Image source={{uri:this.props.rightIconName}} style={{width:64,height:43}}/>
                </View>

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: (width * 0.5) - 1,
        height: 59,
        marginBottom: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    titleStyle: {
        fontSize: 18,

    },
    subTitleStyle: {
        fontSize: 14,
        color: 'gray',

    },

});


