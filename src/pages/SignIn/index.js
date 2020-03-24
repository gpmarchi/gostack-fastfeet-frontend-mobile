import React, { useState } from 'react';
import { Image, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  SubmitButtonText,
} from './styles';

import logo from '~/assets/logo.png';

export default function SignIn({ navigation }) {
  const [deliverymanId, setDeliverymanId] = useState('');

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(deliverymanId));
  }

  return (
    <Container>
      <Image source={logo} height={48} width={244} />
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Informe seu ID de cadastro"
          value={deliverymanId}
          onChangeText={setDeliverymanId}
        />
        <SubmitButton onPress={handleSubmit}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <SubmitButtonText>Entrar no sistema</SubmitButtonText>
          )}
        </SubmitButton>
      </Form>
    </Container>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
