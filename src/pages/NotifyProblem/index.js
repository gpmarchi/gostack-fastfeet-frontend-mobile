import React, { useState } from 'react';
import { TouchableOpacity, StatusBar, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import api from '~/services/api';
import Background from '~/components/Background';

import {
  Container,
  Strip,
  ProblemInput,
  SubmitButton,
  SubmitButtonText,
} from './styles';

export default function NotifyProblem({ navigation, route }) {
  const parcel_id = route.params?.parcel_id;

  const [problem, setProblem] = useState('');

  async function handleAddProblem() {
    try {
      await api.post(`/delivery/${parcel_id}/problems`, {
        description: problem,
      });
      navigation.goBack();
    } catch (error) {
      Alert.alert(
        'Operação não permitida',
        error.response.data.error,
        [
          {
            text: 'OK',
          },
        ],
        { cancelable: false }
      );
    }
  }

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Strip />
      <Container>
        <ProblemInput onChangeText={(text) => setProblem(text)} />
        <SubmitButton onPress={handleAddProblem}>
          <SubmitButtonText>Enviar</SubmitButtonText>
        </SubmitButton>
      </Container>
    </Background>
  );
}

NotifyProblem.navigationOptions = ({ navigation }) => ({
  title: 'Informar problema',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});

NotifyProblem.propTypes = {
  navigation: PropTypes.shape().isRequired,
  route: PropTypes.shape().isRequired,
};
