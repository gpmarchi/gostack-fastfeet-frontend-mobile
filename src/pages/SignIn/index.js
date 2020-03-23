import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

// import { Container } from './styles';

export default function SignIn({ navigation }) {
  return (
    <View>
      <Text>SignIn</Text>
      <Button
        title="To Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </View>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
