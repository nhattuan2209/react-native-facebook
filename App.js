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
import Videos from './src/components/screens/Videos';
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
            fontSize: 15,
            color: 'black'
          },

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Trang chủ") {
              iconName = focused ? 'home-sharp' : 'home-outline';
              color = focused ? '#1571F3' : 'gray';
              size = size + 6;
            } else if (route.name === "Videos") {
              iconName = focused ? "tv-sharp" : "tv-outline";
              size = size + 6;
            } else if (route.name === "Bạn bè") {
              iconName = focused ? "people-sharp" : "people-outline";
              size = size + 6;
            } else if (route.name === "Hồ sơ") {
              iconName = focused ? "person-circle-sharp" : "person-circle-outline";
              size = size + 6;
            } else if (route.name === "Thông báo") {
              iconName = focused ? "notifications-sharp" : "notifications-outline";
              size = size + 6;
            } else if (route.name === "Menu") {
              iconName = focused ? "menu-sharp" : "menu-outline";
            }

            return <Ionic name={iconName} size={size} color={color} />
          }
        })}
      >
        <Tab.Screen name="Trang chủ" component={Home}/>
        <Tab.Screen name="Videos" component={Videos}/>
        <Tab.Screen name="Bạn bè" component={Friends}/>
        <Tab.Screen name="Hồ sơ" component={Profile}/>
        <Tab.Screen name="Thông báo" component={Notification}/>
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
