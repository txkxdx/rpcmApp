import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ItemListScreen from './ItemListScreen';
import WebPageScreen from './cloudPageScreen';
import Icon from 'react-native-vector-icons/Ionicons'
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
 return (
     <Tab.Navigator
       screenOptions={{
         tabBarActiveTintColor: '#008CBA',
         tabBarInactiveTintColor: '#ccc',
         tabBarStyle: {
           backgroundColor: '#f2f2f2',
         },
       }}
     >
       <Tab.Screen
         name="RPCM list"
         component={ItemListScreen}
         options={{
           tabBarIcon: ({ focused }) => (
             <Ionicons
               name={'hardware-chip'}
               size={25}
               color={focused ? '#008CBA' : '#ccc'}
             />
           ),
         }}
       />
       <Tab.Screen
         name="RPCM Cloud"
         component={WebPageScreen}
         options={{
           tabBarIcon: ({ focused }) => (
             <Ionicons
               name={focused ? 'cloud' : 'cloud-outline'}
               size={25}
               color={focused ? '#008CBA' : '#ccc'}
             />
           ),
         }}
       />
     </Tab.Navigator>
   );
}
