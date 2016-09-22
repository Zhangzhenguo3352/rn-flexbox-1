import React,{Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView
} from 'react-native';

export default class Page3 extends Component {
	render(){
		return(
			<ScrollView>
        <View>
          <Text>alignItems 四个属性</Text>
          <Text>felx-start、flex-end、center、stretch (要去除height设置)</Text>
          <Text>=============</Text>
          <Text>flex-start：与父组件的顶部对齐</Text>
          <Text>flex-end：与父组件的底部对齐。</Text>
          <Text>center：处于父容器的中间位置。</Text>
          <Text>stretch：竖直上填充整个容器。</Text>

        </View>
				<View style={styles.height100_flexStart}>
          <View style={[styles.flex,styles.flex_1,styles.height50]}><Text>flex-start 与父组件的顶部对齐</Text></View>
          <View style={[styles.flex,styles.flex_2,styles.height50]}><Text>flex:1、height:50</Text></View>
          <View style={[styles.flex,styles.flex_3,styles.height50]}><Text>flex:1、height:50</Text></View>
          <View style={[styles.flex,styles.flex_4,styles.height50]}><Text>flex:1、height:50</Text></View>
          <View style={[styles.flex,styles.flex_5,styles.height50]}><Text>flex:1、height:50</Text></View>
				</View>


        <View style={styles.height100_flexEnd}>
          <View style={[styles.flex,styles.flex_1,styles.height50]}><Text>flex-end 与父组件的底部对齐</Text></View>
          <View style={[styles.flex,styles.flex_2,styles.height50]}><Text>flex:1、height:50</Text></View>
          <View style={[styles.flex,styles.flex_3,styles.height50]}><Text>flex:1、height:50</Text></View>
          <View style={[styles.flex,styles.flex_4,styles.height50]}><Text>flex:1、height:50</Text></View>
          <View style={[styles.flex,styles.flex_5,styles.height50]}><Text>flex:1、height:50</Text></View>
        </View>

        <View style={styles.height100_center}>
          <View style={[styles.flex,styles.flex_1,styles.height50]}><Text>flex-center 处于容器的中间位置</Text></View>
          <View style={[styles.flex,styles.flex_2,styles.height50]}><Text>flex:1、height:50</Text></View>
          <View style={[styles.flex,styles.flex_3,styles.height50]}><Text>flex:1、height:50</Text></View>
          <View style={[styles.flex,styles.flex_4,styles.height50]}><Text>flex:1、height:50</Text></View>
          <View style={[styles.flex,styles.flex_5,styles.height50]}><Text>flex:1、height:50</Text></View>
        </View>

        <View style={styles.height100_stretch}>
          <View style={[styles.flex,styles.flex_1]}><Text>stretch 竖直上填充整个容器</Text></View>
          <View style={[styles.flex,styles.flex_2]}><Text>flex:1</Text></View>
          <View style={[styles.flex,styles.flex_3]}><Text>flex:1</Text></View>
          <View style={[styles.flex,styles.flex_4]}><Text>flex:1</Text></View>
          <View style={[styles.flex,styles.flex_5]}><Text>flex:1</Text></View>
        </View>

			</ScrollView>
		)
	}
}
const styles = StyleSheet.create({
  height100_flexStart:{
    height:100,
    flexDirection:'row',
    alignItems:'flex-start',
    backgroundColor:'#ccc',
    margin:10
  },
  height100_flexEnd:{
    height:100,
    flexDirection:'row',
    alignItems:'flex-end',
    backgroundColor:'#ccc',
    margin:10
  },
  height100_center:{
    height:100,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#ccc',
    margin:10
  },
  height100_stretch:{
    height:100,
    flexDirection:'row',
    alignItems:'stretch',
    backgroundColor:'#ccc',
    margin:10
  },
  flex:{
    flex:1,
  },
  height50:{
    height:50
  },
  flex_1:{
    backgroundColor:'#399',
  },
  flex_2:{
    backgroundColor:'#9f0',
  },
  flex_3:{
    backgroundColor:'#f90',
  },
  flex_4:{
    backgroundColor:'#09f',
  },
  flex_5:{
    backgroundColor:'#90f',
  }

})
















