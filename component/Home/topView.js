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
    ScrollView,
    Image
} from 'react-native';

let Dimensions = require('Dimensions');
let {width, height}= Dimensions.get('window');
/**引入外部的json数据 */
import TopMenujson from '../../LocalData/TopMenu.json'

/**引入外部组件 */

import TopListView from './topListView'

export default class TopView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indicatorPage: 0,
        }


    }


    render() {
        return (
            <View style={styles.container}>
                {/**内容部分 */}
                <ScrollView
                    horizontal={true}
                    pagingEndble={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this.onScrollAnimationEnd.bind(this)}
                >
                    {this.renderScrollItem()}

                </ScrollView>
                {/**页码部分 */}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}

                </View>
            </View>
        );
    }

//ScrollView内部的组件
    renderScrollItem() {
        //定义组件数组
        let itemArr = [];
        //定义颜色数组 换为数据数组
        // let colorArr=['red','green'];
        let dataArr = TopMenujson.data;
        //遍历创建组件
        for (let i = 0; i < dataArr.length; i++) {
            //
            itemArr.push(
                // <View style={{backgroundColor:colorArr[i],width:380,height:200}}>
                //   <Text>{i}</Text>

                // </View>
                <TopListView
                    key={i}
                    dataArr={dataArr[i]}
                />
            );

        }
        //返回组件数组
        return itemArr;

    }

    //页码指示器
    renderIndicator() {
        //指示器数组
        let indicatorArr = [], style;
        //遍历创建数组
        for (let i = 0; i < 2; i++) {
            //设置圆点的样式
            style = (i === this.state.indicatorPage) ? {color: 'orange'} : {color: 'gray'};
            indicatorArr.push(
                <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
            );
        }
        return indicatorArr;
    }


    // 当一帧滚动结束的时候调用
    onScrollAnimationEnd(e) {
        //求出当前的页码
        let currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);

        //更新状态机
        this.setState({
            indicatorPage: currentPage,
        });

        console.log("currentPage:-----" + currentPage + "--------" + this.state.indicatorPage);
    }


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    indicatorViewStyle: {
        //改变主轴的方向
        flexDirection: 'row',
        //设置居中
        justifyContent: 'center',

    },

});


