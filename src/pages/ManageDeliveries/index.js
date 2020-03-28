import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Dashboard from '~/pages/Dashboard';
import DeliveryDetails from '~/pages/DeliveryDetails';

const ManageDeliveriesStack = createStackNavigator();

const navigatorScreenOptions = {
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
  headerLeftContainerStyle: {
    marginLeft: 20,
  },
  headerStyle: {
    backgroundColor: '#7D40E7',
    elevation: 0,
  },
};

export default function ManageDeliveriesStackScreen() {
  return (
    <ManageDeliveriesStack.Navigator screenOptions={navigatorScreenOptions}>
      <ManageDeliveriesStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={Dashboard.navigationOptions}
      />
      <ManageDeliveriesStack.Screen
        name="DeliveryDetails"
        component={DeliveryDetails}
        options={DeliveryDetails.navigationOptions}
      />
    </ManageDeliveriesStack.Navigator>
  );
}

ManageDeliveriesStackScreen.navigationOptions = {
  tabBarLabel: 'Entregas',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ color, size }) => {
    return <Icon name="view-headline" size={size} color={color} />;
  },
};
