import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 



import Home from './Pages/Home';
import Notification from './Pages/Notification';
import Profile from './Pages/Profile';


const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarActiveTintColor: '#018df7',
    }}
    >
       <Tab.Screen
        name="Home" component={Home}
        options={{
            headerShown:false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
          }}
        />

       <Tab.Screen
        name="Notification" component={Notification} 
        options={{
            headerShown:false,
            tabBarLabel:'Notificação',
            tabBarIcon:({color,size}) =>(
                <MaterialCommunityIcons name="bell" size={size} color={color} />
            )
        }}
        />
       
       <Tab.Screen
        name="Profile" component={Profile} 
        options={{
            headerShown:false,
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
    </Tab.Navigator>
  );
}

export default Routes;