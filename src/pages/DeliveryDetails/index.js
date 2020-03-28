import React from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Background from '~/components/Background';

import {
  Container,
  Strip,
  Delivery,
  Title,
  TitleText,
  InfoTitle,
  Info,
  Status,
  DeliveryDates,
} from './styles';

export default function DeliveryDetails() {
  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Strip />
      <Container>
        <Delivery>
          <Title>
            <Icon name="truck-fast" size={30} color="#7D40E7" />
            <TitleText>Informações da entrega</TitleText>
          </Title>
          <InfoTitle>DESTINATÁRIO</InfoTitle>
          <Info>Ludwig Van Beethoven</Info>
          <InfoTitle>ENDEREÇO DE ENTREGA</InfoTitle>
          <Info>Rua Beethoven, 1729, Diadema - SP, 09960-580</Info>
          <InfoTitle>PRODUTO</InfoTitle>
          <Info>Yamaha SX7</Info>
        </Delivery>
        <Status>
          <Title>
            <Icon name="truck-fast" size={30} color="#7D40E7" />
            <TitleText>Situação da entrega</TitleText>
          </Title>
          <InfoTitle>STATUS</InfoTitle>
          <Info>Pendente</Info>
          <DeliveryDates />
        </Status>
      </Container>
    </Background>
  );
}

DeliveryDetails.navigationOptions = ({ navigation }) => ({
  title: 'Detalhes da encomenda',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
