import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  SubmitButtonText,
} from './styles';

import logo from '~/assets/logo.png';

export default function SignIn({ navigation }) {
  return (
    <Container>
      <Image source={logo} height={48} width={244} />
      <Form>
        <Input
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Informe seu ID de cadastro"
        />
        <SubmitButton onPress={() => navigation.navigate('Dashboard')}>
          <SubmitButtonText>Entrar no sistema</SubmitButtonText>
        </SubmitButton>
      </Form>
    </Container>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
