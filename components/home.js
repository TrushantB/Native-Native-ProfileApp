import React,{Component} from 'react';
import { StyleSheet,Text,View,TouchableOpacity} from 'react-native';
import { Icon ,Button,Container,Header,Content,Left,Right , List, ListItem,} from 'native-base';
import ListView from './templats/listViewArticle';
export default class Home extends Component {
    constructor() {
        super();
        this.state={
          data:[
            {
              "id": 1,
              "title": "Events",
              "tagline": "Add our daily Event"
            },
            {
              "id": 2,
              "title": "Expense",
              "tagline": "Add Expenses"
            },
            {
              "id": 3,
              "title": "Education",
              "tagline": "My Education"
            },
            {
              "id": 4,
              "title": "Gallery",
              "tagline": "My Gallery"
            }
          ]
        }
      }
    static navigationOptions= ({ screenProps,tintColor}) => ({
        drawerIcon:(
              <Icon name="home" style={{ fontSize:24, color:tintColor }}/>
            )
          ,
        title:'Home',
        headerLeft:(
            <Icon name="md-menu" onPress={() => screenProps.openDraw()}  
            style={{marginLeft:20}}/>
        ),
        
    })
    render() {
        return(
            <Container>
            <Content>
              {
               this.state.data && this.state.data.map((item,index) => {
                 return <ListView data={item} key={index} navigation={this.props.navigation} /> ;
               })
              }
            </Content>
          </Container>
        );
    }
}