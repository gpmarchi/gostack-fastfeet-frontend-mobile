import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 20px;
  margin-top: -75px;
`;

export const Strip = styled.SafeAreaView`
  height: 100px;
  background: #7d40e7;
`;

export const Product = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-bottom: 15px;
`;

export const Problems = styled.View``;

export const Problem = styled.View`
  background: #fff;
  border: 1px solid #0000001a;
  border-radius: 4px;
  margin-bottom: 15px;
  padding: 17px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Occurence = styled.Text`
  font-size: 16px;
  color: #999;
`;

export const OccurenceDate = styled.Text`
  font-size: 12px;
  color: #c1c1c1;
`;
