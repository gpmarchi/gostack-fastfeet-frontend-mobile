import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Background from '~/components/Bakcground';

// import { Container } from './styles';

export default function Profile() {
  return (
    <Background>
      <Text>Profile</Text>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ color, size }) => {
    return <Icon name="account-circle" size={size} color={color} />;
  },
};
