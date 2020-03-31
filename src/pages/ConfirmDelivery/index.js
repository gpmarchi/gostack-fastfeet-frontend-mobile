import React, { useState } from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RNCamera } from 'react-native-camera';

import Background from '~/components/Background';

import {
  Container,
  Strip,
  Signature,
  Camera,
  CancelPreview,
  TakePicture,
  Preview,
  Snap,
  SubmitButton,
  SubmitButtonText,
} from './styles';

export default function ConfirmDelivery() {
  let camera;

  const [preview, setPreview] = useState(false);

  async function handleTakePicture() {
    if (camera) {
      setPreview(true);
      // const options = { quality: 0.5, base64: true };
      const options = {
        quality: 0.5,
        orientation: 'auto',
        fixOrientation: true,
        pauseAfterCapture: true,
      };
      const data = await camera.takePictureAsync(options);
      console.tron.log(data);
    }
  }

  function handleCancelPreview() {
    setPreview(false);
    camera.resumePreview();
  }

  function handleConfirmDelivery() {}

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Strip />
      <Container>
        <Signature>
          <Camera
            ref={(ref) => {
              camera = ref;
            }}
            captureAudio={false}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.auto}
            autoFocus={RNCamera.Constants.AutoFocus.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          />
          <TakePicture>
            {!preview ? (
              <Snap onPress={handleTakePicture}>
                <Icon name="camera" size={40} color="#fff" />
              </Snap>
            ) : (
              <Preview onPress={handleCancelPreview}>
                <Icon name="close" size={40} color="#fff" />
              </Preview>
            )}
          </TakePicture>
        </Signature>
        <SubmitButton onPress={handleConfirmDelivery}>
          <SubmitButtonText>Enviar</SubmitButtonText>
        </SubmitButton>
      </Container>
    </Background>
  );
}

ConfirmDelivery.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar entrega',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
