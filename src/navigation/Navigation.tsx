import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from '../screens/ChatScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HistoryScreen from '../screens/HistoryScreen';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import colors from '../consts/colors';
export type RootStackParamList = {
  History: undefined;
  Chat:{chatId:string};
};

const Tab = createBottomTabNavigator<RootStackParamList>()


const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="History"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "red",
        tabBarShowLabel:false,
        tabBarIconStyle:{
          height:'100%'
        }
        
      }}
    >
      <Tab.Screen name="History" component={HistoryScreen} 
        options={{
          tabBarIcon: ({focused,color,size}) => <FontAwesome name="history" size={20} color={focused ? colors.black : colors.darkGray} />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused,color,size}) => <FontAwesome name="comment" size={20} color={focused ? colors.black : colors.darkGray} />,
        }}
      />

    </Tab.Navigator>
  );
}

export default Navigation