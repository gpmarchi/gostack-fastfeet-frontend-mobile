import React, { useState, useEffect, useCallback } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';
import { Alert, StatusBar } from 'react-native';

import api from '~/services/api';
import { signOut } from '~/store/modules/auth/actions';
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
  ProductInfo,
  Withdrawal,
  Description,
  Status,
  DeliverySteps,
  Steps,
  Step,
  Line,
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
  const dispatch = useDispatch();

  const [deliveries, setDeliveries] = useState([]);

  const [filter, setFilter] = useState('pending');

  const deliveryman = useSelector((state) => state.auth.deliveryman);

  const loadDeliveries = useCallback(async () => {
    const response = await api.get(
      `/deliveryman/${deliveryman.id}/deliveries`,
      { params: { status: filter } }
    );

    const data = response.data.map((delivery) => ({
      ...delivery,
      createdAtFormatted: format(parseISO(delivery.created_at), 'dd/MM/yyyy'),
    }));

    setDeliveries(data);
  }, [deliveryman.id, filter]);

  useEffect(() => {
    loadDeliveries();
  }, [loadDeliveries]);

  function handleSignout() {
    dispatch(signOut());
  }

  function handlePackagePickup(deliverymanId, parcelId, product) {
    Alert.alert(
      `${product}`,
      'Deseja efetivar a retirada do produto?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            const response = await api.post(
              `/deliveryman/${deliverymanId}/pickups/${parcelId}`
            );

            setDeliveries(
              deliveries.map((delivery) => {
                if (delivery.id === parcelId) {
                  return { ...delivery, start_date: response.data.start_date };
                }
                return delivery;
              })
            );
          },
        },
      ],
      { cancelable: false }
    );
  }

  function handleFilter(activeFilter) {
    setFilter(activeFilter);
  }

  return (
    <Background>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
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
            <Logout onPress={handleSignout}>
              <Icon name="import" size={30} color="#E74040" />
            </Logout>
          </HeaderInfo>
        </Header>
        <Filters>
          <Title>Entregas</Title>
          <FilterLinks>
            <FilterLink
              isActiveFilter={filter === 'pending'}
              onPress={() => handleFilter('pending')}
            >
              <FilterLinkText isActiveFilter={filter === 'pending'}>
                Pendentes
              </FilterLinkText>
            </FilterLink>
            <FilterLink
              isActiveFilter={filter === 'delivered'}
              onPress={() => handleFilter('delivered')}
            >
              <FilterLinkText isActiveFilter={filter === 'delivered'}>
                Entregues
              </FilterLinkText>
            </FilterLink>
          </FilterLinks>
        </Filters>
        <Deliveries
          data={deliveries}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Delivery>
              <Product>
                <ProductInfo>
                  <Icon name="truck-fast" size={30} color="#7D40E7" />
                  <Description>{item.product}</Description>
                </ProductInfo>
                {!item.start_date && (
                  <Withdrawal
                    onPress={() =>
                      handlePackagePickup(deliveryman.id, item.id, item.product)
                    }
                  >
                    <Icon name="package-up" size={30} color="#7D40E7" />
                  </Withdrawal>
                )}
              </Product>
              <Status>
                <DeliverySteps>
                  <Waiting />
                  <Line />
                  <Withdrawn isComplete={item.start_date} />
                  <Line />
                  <Delivered isComplete={item.end_date} />
                </DeliverySteps>
                <Steps>
                  <Step>
                    <StepText>Aguardando Retirada</StepText>
                  </Step>
                  <Step>
                    <StepText>Retirada</StepText>
                  </Step>
                  <Step>
                    <StepText>Entregue</StepText>
                  </Step>
                </Steps>
                <StatusDetails>
                  <Info>
                    <InfoTitle>Data</InfoTitle>
                    <Content>{item.createdAtFormatted}</Content>
                  </Info>
                  <Info>
                    <InfoTitle>Cidade</InfoTitle>
                    <Content>{item.recipient.city}</Content>
                  </Info>
                  <DetailsLink
                    onPress={() => navigation.navigate('DeliveryDetails')}
                  >
                    <DetailsLinkText>Ver detalhes</DetailsLinkText>
                  </DetailsLink>
                </StatusDetails>
              </Status>
            </Delivery>
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = () => ({
  headerMode: 'none',
  headerShown: false,
});
