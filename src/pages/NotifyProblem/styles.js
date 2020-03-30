import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 0 20px;
  margin-top: -75px;
`;

export const Strip = styled.SafeAreaView`
  height: 100px;
  background: #7d40e7;
`;

export const ProblemInput = styled.TextInput.attrs({
  multiline: true,
  numberOfLines: 10,
  placeholder: 'Inclua aqui o problema que ocorreu na entrega',
})`
  border: 1px solid #0000001a;
  border-radius: 4px;
  background: #fff;
  height: 300px;
  padding: 20px;
  text-align-vertical: top;
  font-size: 16px;
  color: #999;
`;

export const SubmitButton = styled(RectButton)`
  height: 45px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 4px;
  background: #7d40e7;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
