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
    ListView,
    TouchableOpacity,
    Platform
} from 'react-native';
//全局变量

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');
//创建数据源
let ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
export default class TopListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataArr: [],
            dataSource: ds.cloneWithRows(this.props.dataArr),
        }


    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnable={false}
            />
        );
    }

    //具体的Cell
    renderRow(dataSource) {
        return (
            <TouchableOpacity onPress={()=>{alert('0')}} style={styles.cellStyle}>
                <View style={{alignItems:'center'}}>
                    <Image source={{uri:dataSource.image}} style={{width:52,height:52}}/>
                    <Text
                        style={{color:'gray',fontSize:14,justifyContent:'center',alignItems:'center'}}>{dataSource.title}</Text>
                </View>
            </TouchableOpacity>

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
    contentViewStyle: {
        //多个cell在同一行显示
        flexWrap: 'wrap',
        //设置主轴方向
        flexDirection: 'row',
        //宽度
        width: width,


    },
    cellStyle: {

        width: 70,
        height: 70,
        //水平居中和垂直居中
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: (width - 70 * 5) / (5 + 1),
    },

});


