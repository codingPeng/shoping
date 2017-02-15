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
    Switch
} from 'react-native';

export default class CommonCell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',//标题
            isSwitch: false,//是否展示开关
            rightTitle: '',//右边是否有文字
        }
    }


    render() {

        return (
            <TouchableOpacity onPress={()=>{alert('0')}}>
                <View style={styles.container}>
                    {/**左边 */}
                    <Text style={{marginLeft:10}}>{this.props.title}</Text>
                    {/**右边 */}
                    {this.renderRightView()}


                </View>

            </TouchableOpacity>
        );
    }

//右边显示的内容
    renderRightView() {
        //判断
        if (this.props.isSwitch) {
            return (
                <Switch value={this.state.isSwitch} onValueChange={()=>{this.setState({isSwitch:!this.state.isSwitch})}}
                        style={{marginRight:10}}/>
            );

        } else {
            return (
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    {this.rightTitleView()}
                    <Image source={{uri:'icon_cell_rightarrow'}} style={styles.rightImageStyle}/>
                </View>
            );
        }
    }

    rightTitleView() {
        if (this.props.rightTitle != null) {

            return (
                <Text style={{color:'gray',marginRight:5,}}>{this.props.rightTitle}</Text>
            );

        }


    }

}

const styles = StyleSheet.create({
    container: {
        height: 46,
        backgroundColor: 'white',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 0.5,
        //主轴的对齐方式
        flexDirection: 'row',
        //主轴的对齐方式
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    rightImageStyle: {
        width: 8,
        height: 13,
        marginRight: 10
    },

});


