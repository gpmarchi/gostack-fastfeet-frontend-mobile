import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { format, parseISO } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';
import Background from '~/components/Background';

import {
  Container,
  Avatar,
  Title,
  Content,
  LogoutButton,
  LogoutText,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const deliveryman = useSelector((state) => state.auth.deliveryman);

  const createdAtFormatted = useMemo(
    () => format(parseISO(deliveryman.createdAt), 'dd/MM/yyyy'),
    [deliveryman.createdAt]
  );

  function handleSignout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: deliveryman.avatar
              ? deliveryman.avatar.url
              : `https://api.adorable.io/avatars/50/${deliveryman.name}.png`,
          }}
        />
        <Title>Nome completo</Title>
        <Content>{deliveryman.name}</Content>
        <Title>E-mail</Title>
        <Content>{deliveryman.email}</Content>
        <Title>Data de cadastro</Title>
        <Content>{createdAtFormatted}</Content>
        <LogoutButton onPress={handleSignout}>
          <LogoutText>Logout</LogoutText>
        </LogoutButton>
      </Container>
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
