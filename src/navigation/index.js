import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Search, Login } from '../screen';
import Ionic from 'react-native-vector-icons/Ionicons';
import * as Keychain from 'react-native-keychain';

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    (async () => {
      try {
        const credentials = await Keychain.getGenericPassword();
        if (credentials) {
          setIsLoggedIn(true);
        } else {
          console.log('No credentials stored');
        }
      } catch (error) {
        console.log("Keychain couldn't be accessed!", error);
      }
    })();
  }, []);

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 80
          },

          tabBarIcon: ({ focused, size, colour }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
              size = focused ? size + 8 : size + 2;
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'ios-search-outline';
            }

            return <Ionic name={iconName} size={size} color={colour} />;
          }
        })}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Search' component={Search} />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {isLoggedIn ? (
          <>
            <Stack.Screen name='Bottom' component={BottomTabScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Bottom' component={BottomTabScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
