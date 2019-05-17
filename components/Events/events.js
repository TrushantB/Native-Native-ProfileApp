import React ,{Component} from 'react';
import { StyleSheet,Text,View,TouchableOpacity,Button} from 'react-native';

export default class Events extends Component {
    render() {
        return(
            <View>
                <Text>Screen4</Text>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>GO Screen 5</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
