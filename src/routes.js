import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import SignIn from '~/pages/SignIn';
import ManageDeliveries from '~/pages/ManageDeliveries';
import Profile from '~/pages/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabBarOptions = {
  keyboardHidesTabBar: true,
  activeTintColor: '#7D40E7',
  inactiveTintColor: '#999',
  labelStyle: {
    fontSize: 14,
    marginBottom: 10,
  },
  style: {
    height: 70,
  },
};

export default function Routes() {
  const signed = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      {signed ? (
        <Tab.Navigator tabBarOptions={tabBarOptions}>
          <Tab.Screen
            name="ManageDeliveries"
            component={ManageDeliveries}
            options={ManageDeliveries.navigationOptions}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={Profile.navigationOptions}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
