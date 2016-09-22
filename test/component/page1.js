/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React,{Component} from 'react';
import {
  TextInput,
  AppRegistry,
  ScrollView,
  View,
  Text,
  StyleSheet
} from 'react-native';
export default class Dentild extends Component{
  render(){
    return (
      <ScrollView>

      	<View>
          <Text>flexDirection 两个属性</Text>
          <Text>row、column</Text>
          <Text>=============</Text>
          <Text>row：横向布局</Text>
          <Text>column：纵向布局。</Text>


        </View>

        <View>
        	<View style={styles.height200_row}>
	         <View style={styles.flexsudo}><Text>flex:1、height300</Text></View>
	         <View style={styles.flexsudo}><Text>flex:1、height300</Text></View>
	         <View style={styles.flexsudo}><Text>flex:1、height300</Text></View>
	         <View style={styles.flexsudo}><Text>flex:1、height300</Text></View>
	        </View>

	        <View style={styles.height200_column}>
	        	<View style={styles.flexsudo}><Text>flex:1、height300</Text></View>
		         <View style={styles.flexsudo}><Text>flex:1、height300</Text></View>
		         <View style={styles.flexsudo}><Text>flex:1、height300</Text></View>
		         <View style={styles.flexsudo}><Text>flex:1、height300</Text></View>
		        </View>
        </View>

      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
	height200_row:{
		height:200,
		flexDirection:'row'
	},
	flexsudo:{
		flex:1,
		height:50,
			backgroundColor:'#ccc',
			margin:10
	},

	height200_column:{
		height:200,
		flexDirection:'column'
	},
	flexsudo:{
		flex:1,
		height:50,
			backgroundColor:'#ccc',
			margin:10
	}
})

