import React from 'react';
import { Text, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Background from '~/components/Background';

import { Container, Strip } from './styles';

export default function ConfirmProblem() {
  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Strip />
      <Container>
        <Text>Confirm</Text>
      </Container>
    </Background>
  );
}

ConfirmProblem.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar entrega',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
