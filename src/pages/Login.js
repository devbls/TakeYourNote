import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Página Login</Text>
                <Button title='Login' onPress={() => this.props.navigation.navigate('Main')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
