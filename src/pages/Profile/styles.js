import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px;
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  align-self: center;
  margin-bottom: 40px;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: #666;
  align-items: center;
`;

export const Content = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444;
  margin-bottom: 15px;
`;

export const LogoutButton = styled.TouchableOpacity`
  margin-top: 15px;
  background: #e74040;
  border-radius: 4px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const LogoutText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
