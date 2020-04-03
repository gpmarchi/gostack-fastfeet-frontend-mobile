import React, { useState } from 'react';
import { TouchableOpacity, StatusBar, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RNCamera } from 'react-native-camera';
// eslint-disable-next-line import/no-unresolved
import ImageResizer from 'react-native-image-resizer';
import PropTypes from 'prop-types';

import api from '~/services/api';
import Background from '~/components/Background';

import {
  Container,
  Strip,
  Signature,
  Camera,
  TakePicture,
  Preview,
  Snap,
  SubmitButton,
  SubmitButtonText,
} from './styles';

export default function ConfirmDelivery({ navigation, route }) {
  const deliverymanId = route.params?.deliverymanId;
  const parcelId = route.params?.parcelId;

  let camera;

  const [preview, setPreview] = useState(false);
  const [signature, setSignature] = useState('');

  async function handleTakePicture() {
    if (camera) {
      setPreview(true);

      const options = {
        quality: 0.5,
        orientation: 'auto',
        fixOrientation: true,
        pauseAfterCapture: true,
      };

      const { uri } = await camera.takePictureAsync(options);

      setSignature(uri);
    }
  }

  function handleCancelPreview() {
    setPreview(false);
    camera.resumePreview();
  }

  async function handleConfirmDelivery() {
    if (signature) {
      // eslint-disable-next-line no-undef
      const data = new FormData();

      const resizedImage = await ImageResizer.createResizedImage(
        signature,
        500,
        300,
        'JPEG',
        100,
        0,
        null
      );

      data.append('file', {
        uri: resizedImage.uri,
        name: resizedImage.name,
        type: 'image/jpeg',
      });

      try {
        await api.post(
          `/deliveryman/${deliverymanId}/deliveries/${parcelId}`,
          data,
          { headers: { 'Content-Type': 'multipart/form-data' } }
        );

        navigation.navigate('Dashboard');
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
    } else {
      Alert.alert(
        'Operação não permitida',
        'É obrigatório o envio da assinatura do destinatário para finalizar a entrega.',
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
        <Signature>
          <Camera
            ref={(ref) => {
              camera = ref;
            }}
            captureAudio={false}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.auto}
            autoFocus={RNCamera.Constants.AutoFocus.on}
            playSoundOnCapture
            androidCameraPermissionOptions={{
              title: 'Permissão para usar a câmera',
              message: 'Precisamos de sua permissão para usar a câmera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancelar',
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

ConfirmDelivery.propTypes = {
  navigation: PropTypes.shape().isRequired,
  route: PropTypes.shape().isRequired,
};
