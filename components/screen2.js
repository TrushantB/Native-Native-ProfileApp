import React ,{Component} from 'react';
import { StyleSheet,Text,View,TouchableOpacity,Button} from 'react-native';

export default class Screen2 extends Component {
    render() {
        return(
            <View>
                <Text>Screen2</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen1')}>
                    <Text>GO Screen 5</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
