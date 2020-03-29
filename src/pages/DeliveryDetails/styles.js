import styled from 'styled-components/native';

export const Strip = styled.SafeAreaView`
  height: 100px;
  background: #7d40e7;
`;

export const Container = styled.View`
  padding: 0 20px;
  margin-top: -75px;
`;

export const Delivery = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 15px;
  border: 1px solid #0000001a;
  margin-bottom: 10px;
`;

export const Title = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleText = styled.Text`
  margin-left: 5px;
  color: #7d40e7;
  font-size: 14px;
  font-weight: bold;
`;

export const InfoTitle = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #999;
`;

export const Info = styled.Text`
  margin-top: 5px;
  font-size: 14px;
  color: #666;
`;

export const Status = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 15px;
  border: 1px solid #0000001a;
  margin-bottom: 10px;
`;

export const Dates = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const WithdrawalDate = styled.View``;

export const DeliveryDate = styled.View``;

export const Actions = styled.View`
  flex-direction: row;
  background: #f8f9fd;
  height: 83px;
  border: 1px solid #0000001a;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
`;

export const Action = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 33.333%;
  align-self: stretch;
  border-right-width: ${(props) => (props.last ? 0 : '1px')};
  border-right-color: ${(props) => (props.last ? 'transparent' : '#0000001a')};
`;

export const ActionText = styled.Text`
  font-size: 12px;
  color: #999;
  width: 65px;
  text-align: center;
`;
