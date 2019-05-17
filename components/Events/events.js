import React ,{Component} from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity,StyleSheet} from 'react-native';

export default class Events extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>Screen4</Text>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>GO Screen 5</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate("Note")} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
               </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },

    header:{
        backgroundColor: '#E91E63',
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:10,
        borderBottomColor:'#add'
    },

    headerText:{
        color:'white',
        fontSize:18,
        padding:26,
    },

    scrollContainer:{
        flex:1,
        marginBottom: 100,
    },

    footer:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        zIndex:10
    },

    textInput:{
        alignSelf:'stretch',
        color:'#fff',
        padding:20,
        backgroundColor:'#252525',
        borderTopWidth:2,
        borderTopColor:'#ededed'

    },

    addButton:{
        position:'absolute',
        zIndex:11,
        right:20,
        bottom:90,
        backgroundColor:'#E91E63',
        width:90,
        height:90,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        elevation: 8,
    },

    addButtonText:{
        color:'#fff',
        fontSize:24
    }

});
