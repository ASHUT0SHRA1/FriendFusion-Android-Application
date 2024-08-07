import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigation from './RootNavigation';

const App = () => {
  
  return (
    <GestureHandlerRootView>
      
      <NavigationContainer>
        <RootNavigation/>
      </NavigationContainer>
      
    </GestureHandlerRootView>
  )
}

export default App