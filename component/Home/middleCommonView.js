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
let {width, height} = Dimensions.get('window');

export default class MiddleCommonView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            subTitle: '',
            rightIconName: '',
            titleColor: '',
            tplurl: '',
            //回调函数
            callBackClickCell: null,
        }
    }

    render() {
        return (

            <TouchableOpacity onPress={()=>this.clickCell(this.props.tplurl)} style={styles.container}>
                <View style={styles.container}>

                    {/**左边 */}
                    <View >
                        <Text style={[styles.titleStyle,{color:this.props.titleColor}]}>{this.props.title}</Text>
                        <Text style={styles.subTitleStyle}> {this.props.subTitle}</Text>
                    </View>
                    {/**右边 */}
                    <Image source={{uri:this.props.rightIconName}} style={{width:74,height:53,resizeMode:'contain'}}/>
                </View>
            </TouchableOpacity>

        );
    }

    //执行回调
    clickCell(data) {
        //判断处理
        if (this.props.callBackClickCell == null) return;
        //执行回调
        this.props.callBackClickCell(data);


    }


}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        width: width * 0.5 - 0.5,
        height: 59.5,
        // marginBottom:1,
        // marginRight:1,
        borderBottomWidth: 0.5,
        borderBottomColor: '#e8e8e8',
        borderLeftWidth: 0.5,
        borderLeftColor: '#e8e8e8',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    titleStyle: {
        fontSize: 18,
    },
    subTitleStyle: {
        fontSize: 14,
        color: 'gray',
    }
});


