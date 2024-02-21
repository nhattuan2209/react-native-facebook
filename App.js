/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native'
import Ionic from 'react-native-vector-icons/Ionicons';
import Home from './src/components/screens/Home';
import Video from './src/components/screens/Video';
import Friends from './src/components/screens/Friends';
import Notification from './src/components/screens/Notification';
import Profile from './src/components/screens/Profile';
import Menu from './src/components/screens/Menu';
const App = () => {

  const Tab = createBottomTabNavigator();

  const Stack = createNativeStackNavigator();

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            height: 50,
          },
          tabBarLabelStyle: {
            fontSize: 12
          },

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? 'home-sharp' : 'home-outline';
              color = focused ? '#1571F3' : 'gray';
              size = size + 6;
            } else if (route.name === "Video") {
              iconName = focused ? "tv-sharp" : "tv-outline";
              size = size + 6;
            } else if (route.name === "Friends") {
              iconName = focused ? "people-sharp" : "people-outline";
              size = size + 6;
            } else if (route.name === "Profile") {
              iconName = focused ? "person-circle-sharp" : "person-circle-outline";
              size = size + 6;
            } else if (route.name === "Notification") {
              iconName = focused ? "notifications-sharp" : "notifications-outline";
              size = size + 6;
            } else if (route.name === "Menu") {
              iconName = focused ? "menu-sharp" : "menu-outline";
            }

            return <Ionic name={iconName} size={size} color={color} />
          }
        })}
      >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Video" component={Video}/>
        <Tab.Screen name="Friends" component={Friends}/>
        <Tab.Screen name="Profile" component={Profile}/>
        <Tab.Screen name="Notification" component={Notification}/>
        <Tab.Screen name="Menu" component={Menu}/>
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
