import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behaviour: 'padding',
})`
  background: #7d40e7;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 40px;
`;

export const Input = styled.TextInput`
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 16px;
  color: #999;
  margin-bottom: 10px;
  padding: 10px 20px;
`;

export const SubmitButton = styled(RectButton)`
  height: 45px;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  border-radius: 4px;
  background: #82bf18;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
