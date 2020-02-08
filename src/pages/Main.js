import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

export default class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Página Main</Text>
                <Button title='Voltar' onPress={() => this.props.navigation.navigate('Login')} />
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
