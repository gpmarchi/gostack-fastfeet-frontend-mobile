import React, { useState } from 'react';
import { Image, ActivityIndicator, StatusBar } from 'react-native';
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

export default function SignIn() {
  const [deliverymanId, setDeliverymanId] = useState('');

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(deliverymanId));
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
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
