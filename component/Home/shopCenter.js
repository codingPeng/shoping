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
    Image,
    TouchableOpacity,
} from 'react-native';
let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');


//引入外部组件

import BottomCommonCell from './bottomCommonCell'

//引入外部数据
// import ShopCenterData from '../../LocalData/ShopCenterShops'
import Home_D5 from '../../LocalData/MT_Home_D5.json'
export default class ShopCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popToHomeView: null,
        }
    }


    render() {
        return (
            <View style={styles.container}>
                {/**上部分 */}
                <BottomCommonCell
                    leftIcon='gw'
                    leftTitle='购物中心'
                    rightTitle={Home_D5.tips}
                />
                {/**下部分 */}
                <ScrollView
                    horizontal={true} //横向
                    showsHorizontalScrollIndicator={false}//禁用滚动条
                    style={styles.scrollStyle}
                >
                    {this.renderAllItems()}
                </ScrollView>


            </View>
        );
    }

    //返回所有的Item
    renderAllItems() {
        //定义组件数组
        let itemArr = [];
        //取出数据
        let shopData = Home_D5.data;
        //遍历数据
        for (let i = 0; i < shopData.length; i++) {
            //取出单个数据
            let data = shopData[i];
            itemArr.push(
                <ShopCenterItem
                    shopImage={data.img}
                    shopName={data.name}
                    shopSale={data.showtext.text}
                    detailUrl={data.detailurl}
                    popTopShopCenter={(url)=>this.popToHome(url)}
                    key={i}
                />
            )
        }

        return itemArr;

    }

    popToHome(url) {
        //判断
        if (this.props.popToHomeView == null) return;
        //执行回调函数
        this.props.popToHomeView(url);
    }


}
class ShopCenterItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopImage: '',
            shopName: '',
            shopSale: '',
            detailUrl: '',
            popTopShopCenter: null,
        }
    }


    render() {
        return (
            <TouchableOpacity onPress={()=>this.clickItem(this.props.detailUrl)} style={styles.itemViewStyle}>
                <View>
                    <Image source={{uri:this.props.shopImage}} style={styles.imageStyle}/>
                    <Text style={styles.saleStyle}>{this.props.shopSale}</Text>
                    <Text
                        style={{marginTop:10,textAlign:'center',fontSize:14,fontWeight:'bold'}}>{this.props.shopName}</Text>
                </View>
            </TouchableOpacity>

        );


    }

    clickItem(url) {
        //判断
        if (this.props.popTopShopCenter == null) return;
        //执行回调函数
        this.props.popTopShopCenter(url);


    }

}


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: 'white'
    },
    imageStyle: {
        width: 140,
        height: 110,
        borderRadius: 10,

    },
    scrollStyle: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 8,
        width: width - 10,
    },
    itemViewStyle: {
        margin: 8,


    },
    saleStyle: {
        position: 'absolute',
        left: 0,
        bottom: 50,
        backgroundColor: 'orange',
        color: 'white',
        padding: 3,
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
    }

});


