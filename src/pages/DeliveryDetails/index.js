import React, { useState, useEffect, useMemo } from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import { useSelector } from 'react-redux';

import { deliveryStatus } from '~/util/helper';
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
  Dates,
  WithdrawalDate,
  DeliveryDate,
  Actions,
  Action,
  ActionText,
} from './styles';

export default function DeliveryDetails({ navigation, route }) {
  const deliveryman = useSelector((state) => state.auth.deliveryman);

  const [delivery, setDelivery] = useState(route.params?.delivery);

  const withdrawalDateFormatted = useMemo(
    () =>
      delivery.start_date
        ? format(parseISO(delivery.start_date), 'dd/MM/yyyy')
        : '--/--/--',
    [delivery]
  );

  const deliveryDateFormatted = useMemo(
    () =>
      delivery.end_date
        ? format(parseISO(delivery.end_date), 'dd/MM/yyyy')
        : '--/--/--',
    [delivery]
  );

  const status = useMemo(() => deliveryStatus(delivery), [delivery]);

  useEffect(() => {
    const { street, number, city, state, zipcode } = delivery.recipient;

    const data = {
      ...delivery,
      address: `${street}, ${number}, ${city} - ${state}, ${zipcode}`,
      withdrawalDateFormatted,
      deliveryDateFormatted,
      status,
    };
    setDelivery(data);
  }, []);

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
          <Info>{delivery.recipient.name}</Info>
          <InfoTitle>ENDEREÇO DE ENTREGA</InfoTitle>
          <Info>{delivery.address}</Info>
          <InfoTitle>PRODUTO</InfoTitle>
          <Info>{delivery.product}</Info>
        </Delivery>
        <Status>
          <Title>
            <Icon name="calendar" size={30} color="#7D40E7" />
            <TitleText>Situação da entrega</TitleText>
          </Title>
          <InfoTitle>STATUS</InfoTitle>
          <Info>{status}</Info>
          <Dates>
            <WithdrawalDate>
              <InfoTitle>DATA DE RETIRADA</InfoTitle>
              <Info>{withdrawalDateFormatted}</Info>
            </WithdrawalDate>
            <DeliveryDate>
              <InfoTitle>DATA DE ENTREGA</InfoTitle>
              <Info>{deliveryDateFormatted}</Info>
            </DeliveryDate>
          </Dates>
        </Status>
        <Actions>
          <Action
            onPress={() =>
              navigation.navigate('NotifyProblem', { parcel_id: delivery.id })
            }
          >
            <Icon name="close-circle-outline" size={30} color="#E74040" />
            <ActionText>Informar Problema</ActionText>
          </Action>
          <Action
            onPress={() =>
              navigation.navigate('VisualizeProblems', {
                parcel_id: delivery.id,
              })
            }
          >
            <Icon name="information-outline" size={30} color="#E7BA40" />
            <ActionText>Visualizar Problemas</ActionText>
          </Action>
          <Action
            last
            onPress={() =>
              navigation.navigate('ConfirmDelivery', {
                deliveryman_id: deliveryman.id,
                parcel_id: delivery.id,
              })
            }
          >
            <Icon name="check-circle-outline" size={30} color="#7D40E7" />
            <ActionText>Confirmar Entrega</ActionText>
          </Action>
        </Actions>
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

DeliveryDetails.propTypes = {
  navigation: PropTypes.shape().isRequired,
  route: PropTypes.shape().isRequired,
};
