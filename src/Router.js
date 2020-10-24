// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import First from './pages/First';
import Second from './pages/Second';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Router() {
    console.log("Router");
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    // headerShown: false,
                    gestureEnabled: false // ekrandan geri gelme icin basma,
                }}
                // initialRouteName="SecondPage" // hangi sayfadan baslamasini istedigimizi yaziyoruz
            >
                <Stack.Screen
                    name="FirstPage"
                    component={First}
                />
                <Stack.Screen
                    name="SecondPage"
                    component={Second}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;