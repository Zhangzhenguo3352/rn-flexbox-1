import React,{Component} from 'react';
import {
	View,
	Text,
	ScrollView,
	StyleSheet
} from 'react-native';

export default class Page3 extends Component {
	render(){
		return(
			<ScrollView>
				<View>
					<Text>justifyContent 水平控制有五个属性</Text>
					<Text>flex-start、flex-end、center、space-between、space-around</Text>
					<Text>=============</Text>
					<Text>flex-start：伸缩项目与父容器左端靠齐。</Text>
					<Text>flex-end：与父容器右端靠齐。</Text>
					<Text>center：水平居中。</Text>
					<Text>space-between：第一个子组件位于父容器左端，最后一个子组件位于父容器最右端。然后平均分配在父容器水平方向上。</Text>
					<Text>space-around：所有子组件平均分配在父容器的水平方向上，左右都有留空隙。</Text>
				</View>
				<View style={[styles.baseFlex,styles.flexStart]}>
					<View style={[styles.flex_s,styles.flex_1]}><Text>justifyContent 父级</Text></View>
					<View style={[styles.flex_s,styles.flex_2]}><Text>flex-start</Text></View>
					<View style={[styles.flex_s,styles.flex_3]}><Text>height:50、width:80</Text></View>
				</View>

				<View style={[styles.baseFlex,styles.flexEnd]}>
					<View style={[styles.flex_s,styles.flex_1]}><Text>justifyContent 父级</Text></View>
					<View style={[styles.flex_s,styles.flex_2]}><Text>flex-end</Text></View>
					<View style={[styles.flex_s,styles.flex_3]}><Text>height:50、width:80</Text></View>
				</View>

				<View style={[styles.baseFlex,styles.center]}>
					<View style={[styles.flex_s,styles.flex_1]}><Text>justifyContent 父级</Text></View>
					<View style={[styles.flex_s,styles.flex_2]}><Text>center</Text></View>
					<View style={[styles.flex_s,styles.flex_3]}><Text>height:50、width:80</Text></View>
				</View>

				<View style={[styles.baseFlex,styles.spaceBetween]}>
					<View style={[styles.flex_s,styles.flex_1]}><Text>justifyContent 父级</Text></View>
					<View style={[styles.flex_s,styles.flex_2]}><Text>space-between</Text></View>
					<View style={[styles.flex_s,styles.flex_3]}><Text>height:50、width:80</Text></View>
				</View>

				<View style={[styles.baseFlex,styles.spaceAround]}>
					<View style={[styles.flex_s,styles.flex_1]}><Text>justifyContent 父级</Text></View>
					<View style={[styles.flex_s,styles.flex_2]}><Text>space-around</Text></View>
					<View style={[styles.flex_s,styles.flex_3]}><Text>height:50、width:80</Text></View>
				</View>
			</ScrollView>
		)
	}
}
const styles = StyleSheet.create({
	baseFlex:{
		height:100,
		flex:1,
		backgroundColor:'#ccc',
		margin:10,
		flexDirection:'row'
	},
	flexStart:{
		justifyContent:'flex-start'
	},
	flexEnd:{
		justifyContent:'flex-end'
	},
	center:{
		justifyContent:'center'
	},
	spaceBetween:{
		justifyContent:'space-between'
	},
	spaceAround:{
		justifyContent:'space-around'
	},
	flex_s:{
		height:50,
		width:80
	},
	flex_1:{
		backgroundColor:'#90f'
	},
	flex_2:{
		backgroundColor:'#f90'
	},
	flex_3:{
		backgroundColor:'#9f0'
	},
	flex_4:{
		backgroundColor:'#f09'
	},
	flex_5:{
		backgroundColor:'#39f'
	}

})



















