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
    ListView,
    TouchableOpacity,
    Image,
} from 'react-native';

//引入外部组件

import BottomCommonCell from './bottomCommonCell'

//引入外部json数据
import Home_D6 from '../../LocalData/MT_Home_D6'
import YouLikeData from '../../LocalData/HomeGeustYouLike'
let Dimensions = require('Dimensions');
let {width, height} =Dimensions.get('window');
export default class GeustYouLike extends Component {
    //  getDefaultProps(){
    //      return{
    //          api_url:'http://api.meituan.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
    //      }
    //   }

    //   getInitialState(){
    //     // 初始化数据源
    //      return{
    //          dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    //      }
    //   }
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
            api_url: 'http://api.meituan.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <BottomCommonCell
                    leftIcon='cnxh'
                    leftTitle='猜你喜欢'
                />
                {/**列表 */}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />


            </View>
        );
    }

    //处理图像的尺寸
    dealWithImgUrl(url) {
        if (url.search('w.h') == -1) {
            //没有找到 正常返回
            return url;
        } else {
            return url.replace('w.h', '120.90');
        }
    }

    renderRow(rowData) {
        return (
            <TouchableOpacity>
                <View style={styles.listViewStyle}>
                    {/**左边 */}
                    <Image
                        source={{uri:this.dealWithImgUrl(rowData.imageUrl)}}
                        style={styles.imageViewStyle}
                    />
                    {/**右边 */}
                    <View style={styles.rightViewStyle}>
                        <View style={styles.rightTopViewStyle}>
                            <Text style={styles.rightTopTextStyle}>{rowData.title}</Text>
                            <Text
                                style={{color:'gray',fontSize:12,width: width * 0.13,marginRight:10}}>{rowData.topRightInfo}</Text>
                        </View>
                        <Text style={{color:'gray',fontSize:12,marginTop:5,marginBottom:5}}>{rowData.subTitle}</Text>
                        <View style={styles.rightBottomViewStyle}>
                            <Text style={{color:'red',fontSize:16,fontWeight:'bold'}}>{rowData.subMessage}</Text>
                            <Text style={{color:'gray',fontSize:13}}>{rowData.bottomRightInfo}</Text>
                        </View>
                        {/**右边 */}
                    </View>

                </View>


            </TouchableOpacity>


        );

    }

    //从网络上请求数据
    componentDidMount() {
        this.loadDataFromNet();
    }

    loadDataFromNet() {
        fetch(this.state.api_url)
            .then((response) => response.json())   //下一步
            .then((responseData) => {
                //更新数据源
                // console.log(responseData)
                this.setState({dataSource: this.state.dataSource.cloneWithRows(responseData.data)});
            })
            .catch((error) =>
                this.setState({dataSource: this.state.dataSource.cloneWithRows(YouLikeData.data)})
            );

    }

}

const styles = StyleSheet.create({
    container: {

        marginTop: 15,
        backgroundColor: 'white',
    },
    imageViewStyle: {
        width: width * 0.27,
        height: 90,
        // resizeMode:'contain',
        borderRadius: 3,


    },
    listViewStyle: {

        backgroundColor: 'white',
        padding: 10,
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5,

        flexDirection: 'row'


    },
    rightViewStyle: {
        marginRight: 8,
        width: 200,
        marginLeft: 8,
        justifyContent: 'center'

    },
    rightTopViewStyle: {
        flexDirection: 'row',
        marginBottom: 6,
        justifyContent: 'space-between',
    },
    rightBottomViewStyle: {
        flexDirection: 'row',
        marginBottom: 6,
        justifyContent: 'space-between',
    },
    rightTopTextStyle: {
        flexDirection: 'row',
        color: '#555555',
        fontSize: 16,
        fontWeight: 'bold',
        // numberOfLines:1,
        width: width * 0.55
    }

});


