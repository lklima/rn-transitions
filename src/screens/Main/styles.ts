import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const ButtonsContent = styled.View`
  width: 90%;
  height: 80px;
  border-radius: 8px;
  background: #eeedee;
`;

export const RowContent = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

export const Text = styled.Text`
  font-size: 20px;
`;

export const Count = styled.Text`
  font-size: 20px;
  color: gray;
`;

export const AddButtonsContent = styled.View`
  flex-direction: row;
  width: 100px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #eeedee;
  height: 40px;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;

export const CardContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
`;
