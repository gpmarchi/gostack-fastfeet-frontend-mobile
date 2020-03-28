import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native';
import { useSelector } from 'react-redux';

import Background from '~/components/Background';

import {
  Container,
  Header,
  HeaderInfo,
  Deliveryman,
  Avatar,
  Welcome,
  Name,
  Logout,
  Filters,
  Title,
  FilterLinks,
  FilterLink,
  FilterLinkText,
  Deliveries,
  Delivery,
  Product,
  Description,
  Status,
  DeliverySteps,
  Step,
  StepText,
  Waiting,
  Withdrawn,
  Delivered,
  StatusDetails,
  Info,
  InfoTitle,
  Content,
  DetailsLink,
  DetailsLinkText,
} from './styles';

export default function Dashboard({ navigation }) {
  const deliveryman = useSelector((state) => state.auth.deliveryman);

  return (
    <Background>
      <Container>
        <Header>
          <HeaderInfo>
            <Avatar
              source={{
                uri: deliveryman.avatar
                  ? deliveryman.avatar.url
                  : `https://api.adorable.io/avatars/50/${deliveryman.name}.png`,
              }}
            />
            <Deliveryman>
              <Welcome>Bem vindo de volta,</Welcome>
              <Name>{deliveryman.name}</Name>
            </Deliveryman>
            <Logout>
              <Icon name="import" size={30} color="#E74040" />
            </Logout>
          </HeaderInfo>
        </Header>
        <Filters>
          <Title>Entregas</Title>
          <FilterLinks>
            <FilterLink>
              <FilterLinkText>Pendentes</FilterLinkText>
            </FilterLink>
            <FilterLink>
              <FilterLinkText>Entregues</FilterLinkText>
            </FilterLink>
          </FilterLinks>
        </Filters>
        <Deliveries>
          <Delivery>
            <Product>
              <Icon name="truck-fast" size={30} color="#7D40E7" />
              <Description>Encomenda 01</Description>
            </Product>
            <Status>
              <DeliverySteps>
                <Step>
                  <Waiting />
                  <StepText>Aguardando Retirada</StepText>
                </Step>
                <Step>
                  <Withdrawn />
                  <StepText>Retirada</StepText>
                </Step>
                <Step>
                  <Delivered />
                  <StepText>Entregue</StepText>
                </Step>
              </DeliverySteps>
              <StatusDetails>
                <Info>
                  <InfoTitle>Data</InfoTitle>
                  <Content>15/01/2020</Content>
                </Info>
                <Info>
                  <InfoTitle>Cidade</InfoTitle>
                  <Content>Diadema</Content>
                </Info>
                <DetailsLink>
                  <DetailsLinkText>Ver detalhes</DetailsLinkText>
                </DetailsLink>
              </StatusDetails>
            </Status>
          </Delivery>
        </Deliveries>
        <Button
          title="teste"
          onPress={() => navigation.navigate('DeliveryDetails')}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = () => ({
  title: '',
});
