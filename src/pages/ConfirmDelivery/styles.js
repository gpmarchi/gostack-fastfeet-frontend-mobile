import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RNCamera } from 'react-native-camera';

export const Container = styled.View`
  padding: 0 20px;
  margin-top: -75px;
`;

export const Strip = styled.SafeAreaView`
  height: 100px;
  background: #7d40e7;
`;

export const Signature = styled.View`
  border-radius: 4px;
  background: #000;
  height: 495px;
  flex-direction: column;
  justify-content: space-between;
`;

export const Camera = styled(RNCamera)`
  margin-top: 197px;
  height: 100px;
  width: 372px;
`;

export const TakePicture = styled.View`
  align-items: center;
  padding: 20px 0;
`;

export const Preview = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #0000004d;
  border-radius: 40px;
  width: 80px;
  height: 80px;
`;

export const Snap = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #0000004d;
  border-radius: 40px;
  width: 80px;
  height: 80px;
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
