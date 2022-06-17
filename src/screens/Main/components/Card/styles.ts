import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const Container = styled.View`
  height: ${width / 2 - 26}px;
  width: ${width / 2 - 26}px;
  align-items: center;
  justify-content: center;
  background: #3578f7;
  border-radius: 20px;
  margin-bottom: 11px;
`;

export const Text = styled.Text`
  color: white;
  font-size: 22px;
`;
