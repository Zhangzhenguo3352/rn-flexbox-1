import React,{Component} from 'react';
import {
	View,
	Text,
	ScrollView,
	StyleSheet
} from 'react-native';
export default class Page4 extends Component {
	render(){
		return(
			<ScrollView>
				<View>
					<Text>alignSelf 设置单独组件的 竖直对齐方式</Text>
					<Text>五个属性可以设置</Text>
					<Text>flex-start、flex-end、center、stretch、auto (没有高度和strech一样)</Text>
					<Text>stretch 伸展、拉长的意思</Text>
				  <Text>=============</Text>
		          <Text>auto:按照自身设置的宽高来显示，如果没设置，效果跟streth一样</Text>
		          <Text>flex-start:与父容器顶部对齐</Text>
		          <Text>flex-end:与父容器底部对齐。</Text>
		          <Text>center:位于垂直位置。</Text>
		          <Text>stretch：竖直上填充整个容器。</Text>

				</View>
				<View style={[styles.baseFlex]}>
					<View style={[styles.flex_s,styles.flex_1,styles.flexStart]}><Text>alignSelf、flex-start</Text></View>
					<View style={[styles.flex_s,styles.flex_2,styles.flexEnd]}><Text>flex-end</Text></View>
					<View style={[styles.flex_s,styles.flex_3,styles.center]}><Text>center</Text></View>
					<View style={[styles.flex_s,styles.flex_4,styles.stretch]}><Text>stretch</Text></View>
					<View style={[styles.flex_s,styles.flex_5,styles.auto]}><Text>auto</Text></View>
				</View>
			</ScrollView>
		)
	}
}
const styles = StyleSheet.create({
	baseFlex:{
		height:300,
		backgroundColor:'#ccc',
		margin:10,
		flexDirection:'row'
	},
	flex_s:{
		flex:1,
		margin:4
		
	},
	flexStart:{
		alignSelf:'flex-start',
		height:100
	},
	flexEnd:{
		alignSelf:'flex-end',
		height:100
	},
	center:{
		alignSelf:'center',
		height:100
	},
	stretch:{
		alignSelf:'stretch'
	},
	auto:{
		alignSelf:'auto',
		height:100
	},

	flex_1:{
		backgroundColor:'#399'
	},
	flex_2:{
		backgroundColor:'#9f0'
	},
	flex_3:{
		backgroundColor:'#f90'
	},
	flex_4:{
		backgroundColor:'#09f'
	},
	flex_5:{
		backgroundColor:'#f09'
	}

})