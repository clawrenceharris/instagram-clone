import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import LandingScreen from './screens/Landing';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'
import MainScreen from './Main';
import SignUpPassword from './screens/SignUpPassword';
import SignUpName from './screens/SignUpName';
import SignUpBirthday from './screens/SignUpBirthday';


const store = createStore(rootReducer, applyMiddleware(thunk))
const Stack = createStackNavigator()

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [loggedIn, setloggedIn] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        setloggedIn(false)
        setLoaded(true)
      }
      if (user) {
        setloggedIn(true)
        setLoaded(true)
      }
    })


  }, [])

  if (!loaded) {
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size='small' />
    </View>
  }
  if (!loggedIn) {

    return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName='LogIn'>
          <Stack.Screen name='LogIn' component={LogIn} options={{ headerShown: false }} />
          <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen name='SignUpName' component={SignUpName} options={{ gestureEnabled: false, headerShown: false }} />
          <Stack.Screen name='SignUpBirthday' component={SignUpBirthday} options={{ gestureEnabled: false, headerShown: false }} />

          <Stack.Screen name='SignUpPassword' component={SignUpPassword} options={{ gestureEnabled: false, headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <Provider store={store}>


      <MainScreen />

    </Provider>
  )



}
