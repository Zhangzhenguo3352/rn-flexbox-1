import React,{Component} from 'react';
import {
	View,
	Text,
	ScrollView,
	StyleSheet
} from 'react-native';
export default class Page6 extends Component {
	render(){
		return(
			<ScrollView>
				<View> 
					<Text>felxWrap 设置空间不足时 是否 可换行</Text>
					<Text>两个属性：norwrap、wrap</Text>
					<Text>=============</Text>
		          <Text>nowrap:即使空间不够也不换行。</Text>
		          <Text>wrap:空间不够的话自动换行。</Text>
				</View>
			</ScrollView>
		)
	}
}


