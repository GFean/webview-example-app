# webview-example-app
This is an example app, which provides an answer for stackoverflow question: 

App opens react native navigation docs, if you click on React Native Express (first option),
it'll take you back and close the webview (this is handled using the onNavigationStateChange prop), 
if you click the last option there webview is also going to be closed, but this is handled by javscript injection this time.
Otherwise, you're free to browse the web.

See for more details ⤳
https://stackoverflow.com/questions/66351794/redirect-existing-website-link-to-app-expo-react-native/66401656#66401656
