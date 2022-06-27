import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";

const { width } = Dimensions.get("window");

interface ContainerProps {
  index: number;
}

export const Container = styled.View<ContainerProps>`
  width: ${width / 2}px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  padding-left: ${({ index }) => (index % 2 === 0 ? 10 : 0)}px;
  padding-right: ${({ index }) => (index % 2 === 0 ? 0 : 10)}px;
`;

export const CardView = styled(Animated.View)<ContainerProps>`
  height: ${width / 2 - 20}px;
  width: ${width / 2 - 20}px;
  background: ${({ index }) => (index % 2 === 0 ? "#ffab00" : "#007aff")};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const CardText = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: white;
  text-align: center;
`;

export const Shredder = styled(Animated.Image)<ContainerProps>`
  width: ${width / 2 - 2}px;
  position: absolute;
  z-index: 9999;
  align-self: center;
  left: ${({ index }) => (index % 2 === 0 ? 5 : -3)}px;
  opacity: 0;
`;
