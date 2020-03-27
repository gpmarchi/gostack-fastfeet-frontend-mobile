import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function Dashboard() {
  return (
    <Background>
      <Text>Dashboard</Text>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Entregas',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ color, size }) => {
    return <Icon name="view-headline" size={size} color={color} />;
  },
};
