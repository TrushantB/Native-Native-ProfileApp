import React ,{Component} from 'react';
import { StyleSheet,Text,View,TouchableOpacity,Button} from 'react-native';

export default class Screen1 extends Component {
    
    render() {
        return(
            <View>
                <Text>Screen1</Text>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>GO BACK</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
