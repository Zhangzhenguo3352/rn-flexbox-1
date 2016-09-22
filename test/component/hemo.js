/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React,{Component} from 'react';
import Page1 from './page1.js';
import Page2 from './page2.js';
import Page3 from './page3.js';
import Page4 from './page4.js';
import Page5 from './page5.js';
import Page6 from './page6.js';
import {
  ScrollView,
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';
export default class List extends Component{
  goPage1(){
    this.props.navigator.push({
      component:Page1,
      title:'跳转页面title',
      rightButtonTitle:'购物车',
      onRightButtonPress:function(){
        alert('购物车')
      }
    })
  }
  goPage2(){
    this.props.navigator.push({
      component:Page2,
      title:'page2',
      rightButtonTitle:'alert',
      onRightButtonPress:function(){
        alert('alert2')
      }
    })
  }
  goPage3(){
    this.props.navigator.push({
      component:Page3,
      title:'page3',
      rightButtonTitle:'alert',
      onRightButtonPress:function(){
        alert('alert3')
      }
    })
  }
  goPage4(){
    this.props.navigator.push({
      component:Page4,
      title:'page4',
      rightButtonTitle:'alert',
      onRightButtonPress:function(){
        alert('alert4')
      }
    })
  }
  goPage5(){
    this.props.navigator.push({
      component:Page5,
      title:'page5',
      rightButtonTitle:'alert',
      onRightButtonPress:function(){
        alert('page5')
      }
    })
  }
  goPage6(){
    this.props.navigator.push({
      component:Page6,
      title:'page6',
      rightButtonTitle:'alert',
      onRightButtonPress:function(){
        alert('page6')
      }
    })
  }
  render(){
    return (
      <ScrollView>
        <View >
         <Text style={styles.page1} onPress={() => this.goPage1(1)}>flexDirection 主轴方向 (横向 || 纵向)</Text>
         <Text style={styles.page2}onPress={() => this.goPage2(1)}>alignItems 垂直布局，对齐方式</Text>
         <Text onPress={() => this.goPage3()}>justifyContent 水平布局，对齐方式</Text>
         <Text onPress={() => this.goPage4()}>alignSelf 设置单独属性，垂直对齐方式</Text>
         <Text onPress={() => this.goPage5()}>flex 伸缩项目的伸缩样式</Text>
         <Text onPress={() => this.goPage6()}>flexWrap 设置是否可换行</Text>

          <View style={styles.marginTop20}>
            <Text style={[styles.text24xx,styles.page1]}>rn的flexbox主要有以上几个属性</Text>

          </View>
        </View>

      </ScrollView>
    )
  }
}
const styles=StyleSheet.create({
  flex:{
    flex:1
  },
  page1:{
    color:'red'
  },
  page2:{
    color:'#39f'
  },
  text24xx:{
    fontSize:24
  },
  marginTop20:{
    marginTop:20
  }

})
