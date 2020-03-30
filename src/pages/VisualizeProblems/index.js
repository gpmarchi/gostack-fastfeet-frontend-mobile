import React from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Background from '~/components/Background';

import {
  Container,
  Strip,
  Product,
  Problems,
  Problem,
  Occurence,
  OccurenceDate,
} from './styles';

export default function VisualizeProblems() {
  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Strip />
      <Container>
        <Product>Produto</Product>
        <Problems>
          <Problem>
            <Occurence>Destinatário ausente</Occurence>
            <OccurenceDate>14/01/2020</OccurenceDate>
          </Problem>
          <Problem>
            <Occurence>Destinatário ausente</Occurence>
            <OccurenceDate>15/01/2020</OccurenceDate>
          </Problem>
        </Problems>
      </Container>
    </Background>
  );
}

VisualizeProblems.navigationOptions = ({ navigation }) => ({
  title: 'Visualizar problemas',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
