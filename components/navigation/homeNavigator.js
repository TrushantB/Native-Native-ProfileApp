import React,{Component} from 'react';
import {createStackNavigator,createAppContainer,DrawerActions} from 'react-navigation';
import HomePage from '../home';
import Events from '../Events/events';
import Note from '../Events/note';
import Expense from '../Expense/expence';

const MyStackNavigator = createStackNavigator ({
    Home:{screen: HomePage},
    Events:{screen:Events},
    Expense:{screen:Expense},
    Note:{screen:Note}
},
{
    initialRouteName:'Home',
    defaultNavigationOptions:{
        headerStyle:{height:55, backgroundColor:'orange'},
        headerTitleStyle:{fontWeight:'bold', color:'white'},
    }
}) 
const AppContainer=createAppContainer(MyStackNavigator);

export default class StackNavigator extends Component {
    render() {
        return <AppContainer screenProps={{openDraw: () => this.props.navigation.dispatch(DrawerActions.openDrawer())}} />;
    }
}