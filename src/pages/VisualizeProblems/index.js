import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';

import api from '~/services/api';
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

export default function VisualizeProblems({ route }) {
  const delivery = route.params?.delivery;

  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`/delivery/${delivery.id}/problems`);

      const data = response.data.map((problem) => ({
        ...problem,
        createdAtFormatted: format(parseISO(problem.createdAt), 'dd/MM/yyyy'),
      }));

      setProblems(data);
    }

    loadProblems();
  }, []);

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Strip />
      <Container>
        <Product>{delivery.product}</Product>
        <Problems>
          {problems.map((problem) => (
            <Problem key={problem.id}>
              <Occurence>{problem.description}</Occurence>
              <OccurenceDate>{problem.createdAtFormatted}</OccurenceDate>
            </Problem>
          ))}
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

VisualizeProblems.propTypes = {
  route: PropTypes.shape().isRequired,
};
