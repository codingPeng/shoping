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
/**
 * 引入外部的组件
 */



export default class MyCell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftIconName: '',
            leftTitle: '',
            rightIconName: '',
            rightTitle: '',

        }


    }


    render() {
        return (
            <TouchableOpacity onPress={()=>{alert('0')}}>
                <View style={styles.container}>
                    {/**左边 */}
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri:this.props.leftIconName}} style={styles.leftImageStyle}/>
                        <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
                    </View>

                    {/**右边 */}
                    <View style={styles.rightViewStyle}>
                        {this.rightSubView()}

                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    //右边的内容

    rightSubView() {
        return (
            <View style={{flexDirection:'row',alignItems:'center',marginRight:10}}>
                {this.rightContent()}
                {/**箭头 */}
                <Image source={{uri:'icon_cell_rightarrow'}} style={{width:8,height:13}}/>

            </View>


        );

    }

    //右边具体返回的值
    rightContent() {
        if (this.props.rightIconName == null) {//不返回图片
            return (
                <Text style={{marginRight:5}}>{this.props.rightTitle}</Text>
            );
        } else {
            return (
                <Image source={{uri:this.props.rightIconName}} style={{width:24,height:13,marginRight:5}}/>

            );

        }
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        backgroundColor: 'white',
        //主轴的对齐方式
        justifyContent: 'space-between',
        //下边框
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5

    },
    leftViewStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightViewStyle: {
        flexDirection: 'row',

    },
    leftImageStyle: {//左边的图片
        width: 30,
        height: 30,
        alignItems: 'center',
        marginLeft: 10

    },
    leftTitleStyle: {
        marginLeft: 5,
    },

});


