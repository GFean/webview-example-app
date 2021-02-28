import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button title="Go to webview" onPress={() => navigation.navigate("WebViewScreen", {uri: "https://reactnavigation.org/docs/getting-started/"})} />
            <Text>This is home screen...</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
