import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { ActivityIndicator, SafeAreaView, View, StyleSheet } from "react-native"

const WebViewScreen = ({ route, navigation }) => {
    const { params } = route;
    const [webViewLoading, setWebViewLoading] = useState(false);
    const showSpinner = () => setWebViewLoading(true);
    const hideSpinner = () => setWebViewLoading(false);

    const updateNavigationParams = (value) => {
        if (value.url === "https://www.reactnative.express/") {
            navigation.goBack();
        }
    }

    const jsCode = `
    let initialUrl = window.location.href;
    window.ReactNativeWebView.postMessage(JSON.stringify({type: "click", message : initialUrl }))
    `;

    const onMsg = (event) => {
        const res = JSON.parse(event.nativeEvent.data);
        console.log(res.message)
        if (res.message === "https://reactjs.org/docs/context.html") {
            navigation.goBack();
        }
    }

    return (
        // <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
            <WebView
                source={{ uri: params.uri }}
                onLoadStart={showSpinner}

                onLoadEnd={hideSpinner}
                androidHardwareAccelerationDisabled
                javaScriptEnabled
                injectedJavaScript={params?.injectedJavascript}
                injectedJavaScript={jsCode}
                nativeConfig={params?.config}

                javaScriptCanOpenWindowsAutomatically
                collapsable
                onMessage={onMsg}
                onNavigationStateChange={(e) => updateNavigationParams(e)}
            />
            {webViewLoading &&
                <ActivityIndicator
                    animating
                    color={"gray"}
                    size="large"
                // style={styles.spinnerStyle}
                />
            }
        </View>

        // </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default WebViewScreen;