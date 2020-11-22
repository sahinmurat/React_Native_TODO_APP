import React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { SavedJobs } from './pages/SavedJobs'
import { Jobs } from './pages/Jobs'
import { Intro } from './pages/Intro'

const Stack = createStackNavigator();

function Router() {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false}}>
        <Stack.Screen name='Intro' component={SavedJobs} />
        <Stack.Screen name='Jobs' component={Jobs} />
        <Stack.Screen name='SavedJobs' component={Intro} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Router;