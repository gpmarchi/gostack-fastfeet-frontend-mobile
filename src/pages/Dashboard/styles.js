import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  width: 100%;
`;

export const HeaderInfo = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Deliveryman = styled.View`
  margin-left: 15px;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 45px;
`;

export const Welcome = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444;
`;

export const Logout = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: 10px;
`;

export const Filters = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444;
`;

export const FilterLinks = styled.View`
  flex-direction: row;
  width: 150px;
  justify-content: space-between;
`;

export const FilterLink = styled.TouchableOpacity``;

export const FilterLinkText = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

export const Deliveries = styled.View`
  margin-top: 10px;
`;

export const Delivery = styled.View`
  border: 1px solid #0000001a;
  border-radius: 4px;
  margin-bottom: 30px;
`;

export const Product = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

export const Description = styled.Text`
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #7d40e7;
`;

export const Status = styled.View``;

export const DeliverySteps = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 25px 20px;
  margin-top: 10px;
`;

export const Step = styled.View`
  align-items: center;
`;

export const StepText = styled.Text`
  width: 60px;
  text-align: center;
  font-size: 9px;
  color: #999;
  margin-top: 5px;
`;

export const Waiting = styled.View`
  width: 10px;
  height: 10px;
  border: 1px solid #7d40e7;
  border-radius: 5px;
`;

export const Withdrawn = styled.View`
  width: 10px;
  height: 10px;
  border: 1px solid #7d40e7;
  border-radius: 5px;
`;

export const Delivered = styled.View`
  width: 10px;
  height: 10px;
  border: 1px solid #7d40e7;
  border-radius: 5px;
`;

export const StatusDetails = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: #f8f9fd;
`;

export const Info = styled.View``;

export const InfoTitle = styled.Text``;

export const Content = styled.Text``;

export const DetailsLink = styled.TouchableOpacity``;

export const DetailsLinkText = styled.Text``;
