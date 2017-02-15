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

export default class BottomCommonCell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftIcon: '',
            leftTitle: '',
            rightTitle: '',

        }
    }


    render() {
        return (
            <TouchableOpacity onPress={()=>{alert(0)}}>
                <View style={styles.container}>
                    {/**左边 */}
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri:this.props.leftIcon}}
                               style={{width:35,height:35,marginLeft:5,resizeMode:'contain'}}/>
                        <Text style={{fontSize:17,marginLeft:5,fontWeight:'bold'}}>{this.props.leftTitle} </Text>
                    </View >

                    {/**右边 */}
                    <View style={styles.rightViewStyle}>
                        <Text style={{fontSize:14,marginRight:10,color:'gray'}}>{this.props.rightTitle}</Text>
                        <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:10}}/>
                    </View>

                </View>

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'white',

        alignItems: 'center',
        //设置对齐方式
        justifyContent: 'space-between',
        //设置下边框
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 1,
    },
    leftViewStyle: {
        //改变主轴的方向
        flexDirection: 'row',
        alignItems: 'center',

    },
    rightViewStyle: {
        //改变主轴的方向
        flexDirection: 'row',
        alignItems: 'center',

    },

});


