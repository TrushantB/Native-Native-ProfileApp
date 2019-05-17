import React,{Component} from 'react';
import { createDrawerNavigator,createAppContainer,DrawerItems} from 'react-navigation';
import { StyleSheet, Text, View,Image ,SafeAreaView,ScrollView,Dimensions } from 'react-native';
import StackNavigator from './homeNavigator';
import Screen1 from '../screen1';
import Screen2 from '../screen2';
import Screen3 from '../screen3';

const CustomComponent = (props) => (
    <SafeAreaView style={{ flex:1 }}>
      <ScrollView>
        <View style={{height:150,backgroundColor:'white', alignItems:'center', justifyContent:'center'}} >
           <Image source={require('../../assets/trushant_bhangare.jpg')} style={{ height:120,width:140, marginTop:10,borderRadius:50}}/>
        </View>
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>
  )
const MyDrawerNavigator=createDrawerNavigator({
Home:{ screen :StackNavigator},
Screen1:{screen:Screen1},
Screen2:{screen:Screen2},
Screen3:{screen:Screen3},
},
{
    contentComponent:CustomComponent,
    initialRouteName:'Home',
    drawerWidth:300,
    drawerPosition:'left',
    contentOptions:{
        activeTintColor:'orange',
      }
})
const AppContainer=createAppContainer(MyDrawerNavigator);

export default class DrawerNavigator extends Component {
    render() {
        return <AppContainer />
    }
}
